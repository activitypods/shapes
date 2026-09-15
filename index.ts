import fs from "node:fs";
import path from "node:path";
import express from "express";
import type { Request, Response } from "express";

import negotiateHandlerFactory from "./negotiateHandlerFactory.ts";
import { PUBLIC_URL, SOURCE_DIR, WEBSITE_DIST_DIR } from "./api/config.ts";
import { buildShapesIndex, collectPrefixes } from "./api/shapes.ts";
import { getApplications } from "./api/applications.ts";
import { ProposalError, buildProposal, checkRateLimit, proposalsEnabled, submitProposal } from "./api/proposals.ts";

const app = express();
// Behind the production reverse proxy, so that rate limiting sees the client address.
app.set("trust proxy", true);

const FORMATS: Record<string, string> = { turtle: "text/turtle", jsonld: "application/ld+json" };

// The shape files never change while the server runs: index them once.
const shapesIndex = buildShapesIndex();
console.log(`Indexed ${shapesIndex.length} shape trees from ${SOURCE_DIR}`);

const negotiate = negotiateHandlerFactory(SOURCE_DIR, process.env.BASE_URL!);
const websiteIndex = path.join(WEBSITE_DIST_DIR, "index.html");
const hasWebsite = fs.existsSync(websiteIndex);
if (!hasWebsite) console.warn(`No website build found in ${WEBSITE_DIST_DIR}, only RDF will be served`);

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// ---- JSON API used by the website ----

app.get("/api/shapes", (_req, res) => {
  res.json({ publicUrl: PUBLIC_URL, prefixes: collectPrefixes(), shapes: shapesIndex });
});

app.get("/api/applications", async (_req, res) => {
  try {
    res.json(await getApplications());
  } catch (error) {
    console.error(`Could not crawl applications: ${(error as Error).message}`);
    res.status(502).json({ error: "Could not fetch the trusted applications" });
  }
});

// ---- Shape proposals: preview the generated Turtle, then open a pull request ----

app.get("/api/proposals", (_req, res) => {
  res.json({ enabled: proposalsEnabled() });
});

const proposalErrorHandler = (res: Response, error: unknown) => {
  if (error instanceof ProposalError) {
    return res.status(400).json({ error: error.message, field: error.field });
  }
  console.error(error);
  return res.status(500).json({ error: "Could not process the proposal" });
};

app.post("/api/proposals/preview", express.json({ limit: "64kb" }), (req, res) => {
  try {
    res.json(buildProposal(req.body));
  } catch (error) {
    proposalErrorHandler(res, error);
  }
});

app.post("/api/proposals", express.json({ limit: "64kb" }), async (req, res) => {
  if (!checkRateLimit(req.ip ?? "unknown")) {
    return res.status(429).json({ error: "Too many proposals, please try again later" });
  }
  try {
    const result = await submitProposal(req.body);
    console.log(`Opened pull request ${result.url}`);
    res.status(201).json(result);
  } catch (error) {
    proposalErrorHandler(res, error);
  }
});

// ---- Website assets (hashed, safe to cache aggressively) ----

if (hasWebsite) {
  app.use(express.static(WEBSITE_DIST_DIR, { index: false, maxAge: "1y", immutable: true }));
}

// ---- Shapes: HTML for browsers, RDF for everything else ----

app.get("*", async (req: Request, res: Response) => {
  // A browser explicitly asks for text/html; clients such as curl (`*/*`) or the Pod provider
  // (text/turtle, application/ld+json) keep getting the RDF, so shape URIs stay dereferenceable.
  // `?format=turtle|jsonld` lets the website link to the raw RDF from a browser.
  const format = FORMATS[String(req.query.format)];
  if (format) {
    req.headers.accept = format;
  } else if (hasWebsite && /\btext\/html\b/.test(req.headers.accept ?? "")) {
    return res.sendFile(websiteIndex, { cacheControl: false });
  }

  const response = await negotiate(req, res);

  // If there was an error, the response is not writable anymore
  if (!res.writableEnded) {
    // Add the UTF8 charset to Turtle or special characters will appear incorrectly
    if (response.getHeader("Content-Type") === "text/turtle") {
      response.setHeader("Content-Type", "text/turtle; charset=utf-8");
    }
  }

  console.log(`Serving ${req.url}. Response code: ${res.statusCode}`);

  return response;
});

const port = process.env.PORT || 30_916;
export default app.listen(port, () => console.log(`Shape repository listening on http://localhost:${port}`));

// Warm the applications cache so that the first visitor does not wait for the crawl.
getApplications().catch((error) => console.error(`Could not crawl applications: ${error.message}`));
