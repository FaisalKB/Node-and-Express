const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

//Middleware
const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");

//Routes

/* Order matters! When using params, routes and paths can match,
So it's important to make sure we strategically order our routes Hence, putting /zoos/all first*/

app.get("/zoos/all", (req, res, next) => {
  const admin = req.query.admin;
  if (admin === "true") {
    const zoos = getZoos();
    let result = "";
    zoos.forEach((zoo, index) => {
      index < zoos.length - 1 ? (result += zoo + "; ") : (result += zoo);
    });
    res.send(`All zoos: ${result}`);
  } else {
    res.send("You do not have access to that route.");
  }
});

app.get("/check/:zip", validateZip, (req, res, next) => {
  const zoos = getZoos(req.params.zip);
  if (zoos) {
    res.send(`${req.params.zip} exists in our records.`);
  } else {
    res.send(`${req.params.zip} does not exist in our records.`);
  }
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zoos = getZoos(req.params.zip);

  if (zoos.length) {
    let result = "";
    zoos.forEach((zoo, index) => {
      index < zoos.length - 1 ? (result += zoo + "; ") : (result += zoo);
    });
    res.send(`${req.params.zip} zoos: ${result}`);
  } else {
    res.send(`${req.params.zip} has no zoos.`);
  }
});

//Error Handling

app.use((req, res, next) => {
  res.send("That route could not be found!");
});

app.use((error, req, res, next) => {
  res.send(error);
});

module.exports = app;
