var token_db = require("../db/Token");
var axios = require("axios");
var pool = require("../config/ConnectDB");
const ROOT_URL = "https://graph.facebook.com/";

exports.getFriendListServcie = async function(req, res) {
  try {
    //connect db
    var queryData = queryShowData();
    var showData = null;
    queryData.then(function(value) {
      var token = value.access_token;
      var countToken = value.count;
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
      queryUpdateData(countToken, value.id)
    });
  } catch (error) {
    res.status(400);
    res.send(error);
  }
};

exports.getFollowersServcie = async function(req, res) {
  try {
    //connect db
    var queryData = queryShowData();
    queryData.then(function(value) {
      var token = value.access_token;
      var countToken = value.count;
      var url = "";
      if(req.body.hasOwnProperty("pagingToken")){
        url = ROOT_URL + req.body.userId + "/subscribers?limit=1000&access_token=" + token+ "&pretty=1&after=" + req.body.pagingToken;
      } else{
        url = ROOT_URL + req.body.userId + "/subscribers?limit=1000&access_token=" + token;
      }
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
      queryUpdateData(countToken, value.id)
    });
  } catch (error) {
    res.status(400);
    res.send(error);
  }
};

exports.getAllbumsServcie = async function(req, res) {
  try {
    //connect db
    var queryData = queryShowData();
    queryData.then(function(value) {
      var token = value.access_token;
      var countToken = value.count;
      var url = "";
      if(req.body.hasOwnProperty("pagingToken")){
        url = ROOT_URL + req.body.userId + "/albums?limit=1000&access_token=" + token+ "&pretty=1&after=" + req.body.pagingToken;
      } else{
        url = ROOT_URL + req.body.userId + "/albums?limit=1000&access_token=" + token;
      }
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
      queryUpdateData(countToken, value.id)
    });
  } catch (error) {
    res.status(400);
    res.send(error);
  }
};

exports.getJoinedGroupsServcie = async function(req, res) {
  try {
    //connect db
    var queryData = queryShowData();
    queryData.then(function(value) {
      var token = value.access_token;
      var countToken = value.count;
      var url = "";
      if(req.body.hasOwnProperty("pagingToken")){
        url = ROOT_URL + req.body.userId + "/groups?limit=1000&access_token=" + token+ "&pretty=1&after=" + req.body.pagingToken;
      } else{
        url = ROOT_URL + req.body.userId + "/groups?limit=1000&access_token=" + token;
      }

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
      queryUpdateData(countToken, value.id)
    });
  } catch (error) {
    res.status(400);
    res.send(error);
  }
};

exports.getLikedFanpageServcie = async function(req, res) {
  try {
    //connect db
    var queryData = queryShowData();
    queryData.then(function(value) {
      var token = value.access_token;
      var countToken = value.count;
      var url = "";
      if(req.body.hasOwnProperty("pagingToken")){
        url = ROOT_URL + req.body.userId + "/likes?limit=1000&access_token=" + token+ "&pretty=1&after=" + req.body.pagingToken;
      } else{
        url = ROOT_URL + req.body.userId + "/likes?limit=1000&access_token=" + token;
      }

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
      queryUpdateData(countToken, value.id)
    });
  } catch (error) {
    res.status(400);
    res.send(error);
  }
};

exports.getPhotoServcie = async function(req, res) {
  try {
    //connect db
    var queryData = queryShowData();
    queryData.then(function(value) {
      var token = value.access_token;
      var countToken = value.count;
      var url = "";
      if(req.body.hasOwnProperty("pagingToken")){
        url = ROOT_URL + req.body.userId + "/photos?limit=1000&access_token=" + token+ "&pretty=1&after=" + req.body.pagingToken;
      } else{
        url = ROOT_URL + req.body.userId + "/photos?limit=1000&access_token=" + token;
      }

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
      queryUpdateData(countToken, value.id)
    });
  } catch (error) {
    res.status(400);
    res.send(error);
  }
};

//handler query db - get token
async function queryShowData() {
  var queryShow = "SELECT * FROM token WHERE count < 50000 ORDER BY updated_at";
  let accessToken = await pool.query(queryShow);
  return accessToken[0];
};

//handler query db - update token
async function queryUpdateData(countToken, id) {
  var queryUpdate = "UPDATE token SET count =" + countToken + " WHERE id = " + id;
  await pool.query(queryUpdate);
};
