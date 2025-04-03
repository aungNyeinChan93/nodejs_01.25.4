const { MongoClient } = require("mongodb");

const connStr = "mongodb://localhost:27017/media";

let connection;

const connectDB = (cb) => {
  MongoClient.connect(connStr)
    .then((client) => {
      conn = client.db();
      cb();
    })
    .catch((err) => cb(err));
};

const getConn = () => connection;

module.exports = {
  connectDB,
  getConn,
};
