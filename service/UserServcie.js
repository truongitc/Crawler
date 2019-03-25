var token_db = require('../db/Token');
var axios = require('axios');
var pool = require('../config/ConnectDB');

const ROOT_URL = 'https://graph.facebook.com/'

exports.getFriendListServcie = async function(req, res){

  //connect db
  var query = "SELECT * FROM token";
  let accessToken = await pool.query(query);
  //console.log("token: " + token[0].access_token);

  var token = accessToken[0].access_token;

  //var token = token_db.getToken();
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
