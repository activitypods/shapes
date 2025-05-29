import fs from "fs";
import Negotiator from "negotiator";
import path from "path";
import { allowedDestinations, getContentType, transform } from "rdf-transform";
import streamifyString from "streamify-string";
import type { Request, Response } from "express";

/**
 * Create an express handler that serves content negotiated files from a given
 * path
 * @param basePath The directory of the data files
 * @returns The express handler
 */
function negotiateHandlerFactory(
  basePath: string,
  baseUri: string,
  containsTriples?: boolean
) {
  return async function negotiateHandler(req: Request, res: Response) {
    const fileFolder = path.join(basePath, ...req.path.split("/").slice(0, -1));

    let sourceContentType;
    let fp;
    let dataStream;

    if (containsTriples && req.path.endsWith("/")) {
      // Requested URI is a directory. Return in ldp container format.
      try {
        const files = fs.readdirSync(fileFolder, { withFileTypes: true }).map(
          (f) =>
            `<${
              // eslint-disable-next-line no-nested-ternary
              f.isDirectory()
                ? `${f.name}/`
                : f.name.includes(".")
                  ? f.name.slice(0, f.name.lastIndexOf("."))
                  : f.name
            }>`
        );
        const str = `<> <http://www.w3.org/ns/ldp#contains> ${files.join(
          ", "
        )} .`;
        dataStream = streamifyString(str);
        sourceContentType = "text/turtle";
        fp = "dir.ttl";
      } catch (e) {
        return res.status(404).send("Not Found").end();
      }
    } else {
      // First get the file name
      let fileName: string | undefined;
      const defaultFiletypes = [".ttl", ".shacl.ttl", ".shacl"];
      const requestedFile = req.path.slice(req.path.lastIndexOf("/") + 1);
      try {
        fileName = fs.readdirSync(fileFolder).find((file) => {
          if (requestedFile === file) return true;

          // If it ends with .ttl or .schacl.ttl
          const hasDefaultType = defaultFiletypes.some(
            (ending) => `${requestedFile}${ending}` === file
          );
          return hasDefaultType;
        });
      } catch (e) {
        return res.status(404).send("Not Found").end();
      }

      if (typeof fileName !== "string") {
        return res.status(404).send("Not Found").end();
      }

      fp = path.join(fileFolder, fileName);
      sourceContentType = getContentType({ path: fp });

      if (sourceContentType === "") {
        return res
          .status(500)
          .send(
            "Internal Server Error: Requested resource is not a recognized RDF serialization"
          )
          .end();
      }

      dataStream = fs.createReadStream(path.join(fp));
    }

    // Then get the response content type
    const responseType =
      sourceContentType === "text/n3" &&
      new Negotiator(req).mediaType(["text/n3"])
        ? // If the source is n3, and the client accepts n3, then we should always use n3 as it is not
          // compatible with other formats due to accepting variables in the subject & object positions
          "text/n3"
        : new Negotiator(req).mediaType(
            await allowedDestinations(sourceContentType)
          );

    if (typeof responseType !== "string") {
      return res.status(406).send("Not Acceptable").end();
    }

    const responseStream = transform(dataStream, {
      from: { path: fp },
      to: { contentType: responseType },
      baseIRI:
        baseUri || `${req.protocol}://${req.get("host")}${req.originalUrl}`,
    });

    responseStream.on("error", (e) => {
      res
        .status(500)
        .setHeader("content-type", "text/plain")
        .send(`Internal server error transforming internal resource [${e}]\n`)
        .end();
    });

    return responseStream.pipe(
      res.status(200).setHeader("content-type", responseType)
    );
  };
}

export default negotiateHandlerFactory;
