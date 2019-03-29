module.exports = function(app){

  var userController = require('../controller/Profile');
  var groupController = require('../controller/Group');
  var objectUserController = require('../controller/ObjectUser');

  // ============================ User ============================ //
  //get friend list
  app.route('/profile/friends').post(userController.profileFriendList);

  //get follower list
  app.route('/profile/followers').post(userController.profileFollowers);

  //get follower user
  app.route('/profile/allbums').post(userController.profileLikedFanpage);

  //get groups list user join
  app.route('/profile/groups').post(userController.profileAllbums);

  //get fanpage list user like
  app.route('/profile/fanpage').post(userController.profileJoinedGroups);

  //get photo user
  app.route('/profile/photo').post(userController.profilePhoto);

  // ============================ Group ============================ //

  //get all members on  group
  app.route('/group/members').post(groupController.groupMembers);

  // ============================ Object User ============================ //

  app.route('/object/reaction').post(objectUserController.objectReaction);

  // get comment user
  app.route('/object/comments').post(objectUserController.objectComments);

  //
  app.route('/object/common').post(objectUserController.objectCommon);

  // get post shared
  app.route('/object/shared').post(objectUserController.objectShared);

  // get post shared
  app.route('/object/feed').post(objectUserController.objectFeed);
}
