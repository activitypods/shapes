require("dotenv").config();

const path = require("path");
const express = require("express");
const negotiateHandlerFactory = require("./negotiateHandlerFactor");

const app = express();

console.log("BASE_URL", process.env.BASE_URL);

app.get("*", async (req, res) => {
  const response = await negotiateHandlerFactory(
    path.join(__dirname, "src"),
    process.env.BASE_URL
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

module.exports = app.listen(process.env.PORT || 8000);
