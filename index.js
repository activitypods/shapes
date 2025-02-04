const fs = require("fs");
const path = require("path");
const express = require("express");
const { negotiateHandlerFactory } = require("rdf-serve");

express.static.mime.define({ "text/shex": ["shex"] });

const app = express();

app.get("/shex/*", (req, res) => {
  const wildcardPath = req.params["0"];
  console.log("wildcardPath", wildcardPath);
  fs.readFile(`shapes/shex/${wildcardPath}.shex`, "utf8", (err, data) => {
    if (err) {
      res.status(404).send();
    } else {
      res.setHeader("Content-Type", "text/shex");
      res.status(200).send(data);
    }
  });
});

app.get("/trees/*", async (req, res) => {
  const response = await negotiateHandlerFactory(
    path.join(__dirname, "shapes")
  )(req, res);

  // Add the UTF8 charset to Turtle or special characters will appear incorrectly
  if (response.getHeader("Content-Type") === "text/turtle") {
    res.setHeader("Content-Type", "text/turtle; charset=utf-8");
  }

  return response;
});

module.exports = app.listen(process.env.PORT || 3000);
