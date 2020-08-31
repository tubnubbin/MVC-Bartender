const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const routes = require('./routes/routes');

const port = process.env.PORT || 3080;

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/api", routes);


app.listen(port, function (err) {
  if (err)
    throw err;
  console.log('Server is running on port: ' + port + '.');
});

module.exports = app;
