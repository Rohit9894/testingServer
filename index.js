require("dotenv").config();
const express = require("express");
const connect = require("./src/config/db");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello my");
});

app.listen(8080, async () => {
  await connect();
  console.log("Listening on at http://localhost:8080");
});
