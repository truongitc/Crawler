var groupServcie = require('../service/GroupServcie');

//get all members in group
exports.groupMembers = function(req, res){
  groupServcie.getMembersServcie(req, res);
};
