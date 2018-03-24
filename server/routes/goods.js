var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var goods = require('../models/goods');

mongoose.connect('mongodb://127.0.0.1:27017/zzw')

mongoose.connection.on("connected",function(){
  console.log("mongodbsuccess")
})
mongoose.connection.on("error",function(){
  console.log("mongodberror")
})
mongoose.connection.on("disconnected",function(){
  console.log("mongodbdis")
})

router.get("/",function(req,res,next){
    goods.find({},function(err,doc){
      if(err){
        res.json({
          status:"1",
          msg:err.message
        })
      }else{
        res.json({
          status:"0",
          msg:"",
          result:{
            count:doc.length,
            list:doc
          }
        })
      }
    })
})
module.exports = router;
