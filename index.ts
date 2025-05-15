import dotenv from "dotenv";
dotenv.config();

import path from "node:path";
import express from "express";
import type { Request, Response } from "express";

import negotiateHandlerFactory from "./negotiateHandlerFactory.ts";

const app = express();

app.get("*", async (req: Request, res: Response) => {
  const response = await negotiateHandlerFactory(
    path.join(__dirname, "packages/shape-definitions/"),
    process.env.BASE_URL!
  )(req, res);

  // If there was an error, the response is not writable anymore
  if (!res.writableEnded) {
    // Add the UTF8 charset to Turtle or special characters will appear incorrectly
    if (response.getHeader("Content-Type") === "text/turtle") {
      response.setHeader("Content-Type", "text/turtle; charset=utf-8");
    }

    response.setHeader("Access-Control-Allow-Origin", "*");
  }

  console.log(`Serving ${req.url}. Response code: ${res.statusCode}`);

  return response;
});

export default app.listen(process.env.PORT || 30_916);
