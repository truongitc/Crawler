var userServcie = require('../service/UserServcie');

exports.profileFriendList = function(req, res){
  //console.log("UserId: " +req.body.user_id);
  userServcie.getFriendListServcie(req, res);
};
