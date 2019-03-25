var express = require('express');
var app = express();
var http = require('http').Server(app);
const postHttp = 4040;
var bodyParser = require('body-parser');

var total_count = 0;
var reset_time = new Date().getTime();

app.use(bodyParser.urlencoded({extented:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  next();
});

app.use(function(req, res, next) {

  console.log("CALL");

  var token = req.get("X-Authorized");
  if(token){
    if (token === "truongnv") {
      total_count++;
      if (total_count > 100000) {
        var current_time = new Date().getTime();
        if ((current_time - reset_time) > 86400000) {
          reset_time = current_time;
          total_count = 0;
          next();
        } else{
          res.status(404);
          res.send("LIMIT REACHED")
        }
      } else{
        next();
      }
    } else{
      res.status(405);
      res.send("Error");
    }
  } else{
    res.status(403);
    res.send("Error");
  }
});

var route = require('./route/Route');
route(app);

http.listen(postHttp, function(){
  console.log('Listening on *:' + postHttp);
})
