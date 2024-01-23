const express = require("express");

const app = express();
var randomNumber;

app.get("/", (req, res) => {
  res.send(`This is the response from the server number: ${randomNumber}`);
});
app.listen(5050, () => {
  console.log("Listening...");
  randomNumber = Math.floor(Math.random() * 10000);
});
