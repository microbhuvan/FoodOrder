require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("app working");
});

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
