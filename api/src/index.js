const express = require("express");

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

app.get("/nsk", (req, res) => {
  res.send("Our api server is working perfectly");
});
app.listen(port, () => {
  console.log("started api service");
  console.log(`Ourapi service port is on ${port}`);
  console.log(`Our host is ${host}`);
});
