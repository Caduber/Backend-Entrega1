const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";

async function connect() {
const client = new MongoClient(url);
await client.connect();
const db = client.db("chocolateDb");
return { db, client };
}

module.exports = {connect}