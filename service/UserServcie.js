var token_db = require("../db/Token");
var axios = require("axios");
var pool = require("../config/ConnectDB");

const ROOT_URL = "https://graph.facebook.com/";

exports.getFriendListServcie = async function(req, res) {
  //connect db
  //connect db
  var queryShow = "SELECT * FROM token WHERE count < 50000 ORDER BY updated_at";
  let accessToken = await pool.query(queryShow);
  
  var token = accessToken[0].access_token;
  var countToken = accessToken[0].count;
  var url = ROOT_URL + req.body.userId + "/friends?limit=5000&access_token=" + token;
  
  axios
  .get(url)
  .then(function(responese) {
    delete responese.data.paging;
    res.send(responese.data);
  })
  .catch(function(error) {
    res.status(400);
    res.send(error.responese.data);
  });

  countToken++;
  var queryUpdate = "UPDATE token SET count =" + countToken + " WHERE id = " + accessToken[0].id;
  await pool.query(queryUpdate);
};

exports.getFollowersServcie = async function(req, res) {
  //connect db
  var queryShow = "SELECT * FROM token WHERE count < 50000 ORDER BY updated_at";
  let accessToken = await pool.query(queryShow);
  
  var token = accessToken[0].access_token;
  var countToken = accessToken[0].count;
  var url = ROOT_URL + req.body.userId + "/subscribers?limit=1000&access_token=" + token;
  
  console.log(url);
  axios
  .get(url)
  .then(function(responese) {
    if(responese.data.hasOwnProperty("paging")){
      if(responese.data.paging.hasOwnProperty("next")){
        var pagingUrl = responese.data.paging.cursors.after;
        var data = {data: responese.data.data, paging: pagingUrl};
        res.send(data);
      } else{
        res.send(responese.data.data);
      }
    } else {
      res.send(responese.data);
    }
  })
  .catch(function(error) {
    res.status(400);
    res.send(error.responese.data);
  });

  countToken++;
  var queryUpdate = "UPDATE token SET count =" + countToken + " WHERE id = " + accessToken[0].id;
  await pool.query(queryUpdate);
};

exports.getPagingFollowersServcie = async function(req,res){
  //connect db
  var queryShow = "SELECT * FROM token WHERE count < 50000 ORDER BY updated_at";
  let accessToken = await pool.query(queryShow);

  var token = accessToken[0].access_token;  
  var countToken = accessToken[0].count;
  var url = ROOT_URL + req.body.userId + "/subscribers?limit=1000&access_token=" + token+ "&pretty=1&after=" + req.body.pagingToken;

  console.log("Paging: " + url);

  axios
  .get(url)
  .then(function(responese) {
    if(responese.data.hasOwnProperty("paging")){
      if(responese.data.paging.hasOwnProperty("next")){
        var pagingUrl = responese.data.paging.cursors.after;
        var data = {data: responese.data.data, paging: pagingUrl};
        res.send(data);
      } else{
        res.send(responese.data.data);
      }
    } else {
      res.send(responese.data);
    }
  })
  .catch(function(error) {
    res.status(400);
    res.send(error.responese.data);
  });

  // countToken++;
  // var queryUpdate = "UPDATE token SET count =" + countToken + " WHERE id = " + accessToken[0].id;
  // await pool.query(queryUpdate);
};

exports.getAllbumsServcie = async function(req, res) {};

exports.getJoinedGroupsServcie = async function(req, res) {};

exports.getLikedFanpageServcie = async function(req, res) {};

exports.getPhotoServcie = async function(req, res) {};
