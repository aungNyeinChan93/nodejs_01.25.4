const { MongoClient } = require("mongodb");

let test_connection;

const connectTestDB = (cb) => {
  MongoClient.connect("mongodb://localhost:20717/test1")
    .then((client) => {
      test_connection = client.db();
      cb();
    })
    .catch((err) => cb(err));
};

const getTestConnection = () => test_connection;

module.exports = {
  connectTestDB,
  getTestConnection,
};
