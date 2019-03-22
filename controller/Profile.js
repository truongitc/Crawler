var userServcie = require('../service/UserServcie');

exports.profileFriendList = function(req, res){
  userServcie.getFriendListServcie(req, res);
};
