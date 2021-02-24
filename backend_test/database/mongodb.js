const {MongoClient} = require('mongodb');

const assert = require('assert');

// Connection URL
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

function DatabaseHandler(){
this.DatabaseHandler=async function(jsonData) {
  try {
    
    await client.connect();
    console.log("Connected correctly to server");
    const database = client.db("backend_test");
    console.log("connected to db")
    const collection = database.collection("posts");
    console.log("connected to collection")
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };
    const result = await collection.insertMany(jsonData, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch(err){
    console.log("cannot write to database,err",err)
  }
  finally {
    console.log("closing db");
    // await client.close();
  }
}
this.getPosts=async function() {
  try {
    
    await client.connect();
    console.log("Connected correctly to server");
    const database = client.db("backend_test");
    console.log("connected to db")
    const collection = database.collection("posts");
    console.log("connected to collection")
    const query={};
    
    const cursor = await collection.find(query);
    const result=await cursor.toArray();
    return result
  } catch(err){
    console.log("cannot write to database,err",err)
  }
  finally {
    console.log("closing db");
    await client.close();
  }
}
// DatabaseHandler(jsonData).catch(console.dir);
}


module.exports =
 {
    DatabaseHandler
 };