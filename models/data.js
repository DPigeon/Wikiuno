const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  name: String,
  description: String,
  input: String,
  output: String,
  moduleUsed: String,
  pinsUsed: String
});

const Data = (module.exports = mongoose.model("Hi", DataSchema));

module.exports.getData = function(callback, limit) {
  Data.find(callback);

  const MongoClient = require("mongodb").MongoClient;
  const uri =
    "mongodb://Hackathon:helloyou@cluster0-shard-00-00-bpvrp.mongodb.net:27017,cluster0-shard-00-01-bpvrp.mongodb.net:27017,cluster0-shard-00-02-bpvrp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("hackathon").collection("hackathon");
    collection.find().toArray(callback);
    client.close();
  });
};
