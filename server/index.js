const express = require("express");

const app = express();
const server = process.env.server || "GateWay";

app.get("/", (req, res) => {
  res.send(`This is the response from the server ${server} `);
});
app.listen(5050, () => {
  console.log("Listening...");
});
