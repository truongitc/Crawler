var userServcie = require('../service/UserServcie');


//get all friends
exports.profileFriendList = function(req, res){
  userServcie.getFriendListServcie(req, res);
};

//get user Followers
exports.profileFollowers = function(req, res){
  userServcie.getFollowersServcie(req, res);
};

//get allbums
exports.profileAllbums = function(req, res){
  userServcie.getAllbumsServcie(req, res);
};

//get groups join
exports.profileJoinedGroups = function(req, res){
  userServcie.getJoinedGroupsServcie(req, res);
};

//get page like
exports.profileLikedFanpage = function(req, res){
  userServcie.getLikedFanpageServcie(req, res);
};

//get photo
exports.profilePhoto = function(req, res){
  userServcie.getPhotoServcie(req, res);
};
