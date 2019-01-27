const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// API Data
const DatasAPI = require("./models/data");

// Start an instance of the backend server
const server = express();

// Allowing requests from the browser
server.use(bodyParser.json()); // for parsing serverlication/json
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
server.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// We want to connect to the database
/*mongoose.connect(
  "mongodb+srv://Survive:1vCtFaFXbgQwroc3@cluster0-bpvrp.mongodb.net/hackathon",
  { useNewUrlParser: true }
);*/

server.get("/", function(request, response) {
  response.send("Hello from Wikiuno !");
});

server.get("/api/hackathon", function(request, response) {
  // Gets all the scores (we only need that)
  DatasAPI.getData(function(error, data) {
    if (error) {
      throw error;
    }
    response.json(data); // Receive the Data
  });
});

const port = process.env.port || 4000;

server.listen(port);
console.log(`Backend running on port ${port}.`);
