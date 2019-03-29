var objectServcie = require('../service/ObjectUserService');

//
exports.objectReaction = function(req, res){
  groupServcie.getReactionServcie(req, res);
};

// get comment user
exports.objectComments = function(req, res){
  groupServcie.getCommentsServcie(req, res);
};

//
exports.objectCommon = function(req, res){
  groupServcie.getCommonsServcie(req, res);
};


// get post shared
exports.objectShared = function(req, res){
  groupServcie.getSharedServcie(req, res);
};


//
exports.objectFeed = function(req, res){
  groupServcie.getFeedServcie(req, res);
};
