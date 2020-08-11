const express = require("express");
const app = express();

const { json } = require("body-parser");
app.use(json());

if (["production", "ci"].includes(process.env.NODE_ENV)) {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Listen to 4000"));
