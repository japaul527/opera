const fetch = require('node-fetch');
const DatabaseHandlerModule=require('../database/mongodb.js');
const DatabaseHandler=new DatabaseHandlerModule.DatabaseHandler();
 function import_posts(){
this.import_posts=async function(){


    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData=await response.json();
        
        const user_response=await fetch('https://jsonplaceholder.typicode.com/users');
        const user_json=await user_response.json()
        await console.log("user_json",user_json);
        
        let new_json=await jsonData.map((e,i)=>{
            let temp=user_json.find(ele=>e.userId===ele.id)
            e.name=temp.name;
            return e;
        })
        await console.log("new json",new_json)
        // await DatabaseHandler.DatabaseHandler(jsonData);
        await DatabaseHandler.DatabaseHandler(new_json);
        
        
    }catch(err){
        console.log('cerr',err)
    }
    finally{

    }
}        

    
 }

module.exports={
    import_posts
}