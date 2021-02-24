var express = require('express');
var router = express.Router();
var import_posts_module=require('../posts/import_posts.js');
var import_posts=new import_posts_module.import_posts()
var retrieve_posts_module=require('../posts/retrieve_posts.js');
var retrieve_posts=new retrieve_posts_module.get_posts()
/* GET home page. */
router.get('/', async function(req, res, next) {
  await import_posts.import_posts()
  const jsonData=await retrieve_posts.get_posts()
  
  await res.render('index',{jsonData:jsonData})
})
module.exports = router;
