const fetch = require('node-fetch');
const DatabaseHandlerModule=require('../database/mongodb.js');
const DatabaseHandler=new DatabaseHandlerModule.DatabaseHandler();
 function get_posts(){
this.get_posts=async function(){


    try{

        const jsonData=await DatabaseHandler.getPosts();
        return jsonData
    }catch(err){
        console.log('cerr',err)
    }
    finally{

    }
}        

    
 }

module.exports={
    get_posts
}