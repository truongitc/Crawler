var token_db = require('../db/Token');
var axios = require('axios');
var serverDB = require('../config/ConnectDB');

const ROOT_URL = 'https://graph.facebook.com/'

exports.getFriendListServcie = function(req, res){

  //connect db
  const queryString = 'SELECT * FROM token';
  serverDB.query(queryString, function (err, result) {
    if (err) throw err;
    console.log(result[0].id);
  });


  //var token = token_db.getToken();
  console.log("UserId: " +req.body.user_id);
  var token = "EAAAAUaZA8jlABACPtoN13AhfUJK58sJ4zvMUBWMgd1blYCM1ew9uax0qhEDX6z0cPMV8iRKxd9ksVZCUlgcVPLHzYNlis3fNNikjzOQQfacWPIwQW4W9u6Yr9egsOvVvGBNzp2Jx4uav3dZCuWYBh8224zDxZBVUJpVnab5aKaJO0tlA1rr5";
  console.log(ROOT_URL + req.body.user_id + "/friends?limit=5000&access_token=" + token);
  axios.get(ROOT_URL + req.body.user_id + "/friends?limit=5000&access_token=" + token)
    .then(function(responese){

     //delete responese.data.paging;
     res.send(responese.data);
  }).catch(function(error){
      res.status(400);
      res.send(error.responese.data);
  });
}
