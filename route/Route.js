module.exports = function(app){

  var userController = require('../controller/Profile');

  app.route('/profile/friends').post(userController.profileFriendList);

  app.route('/profile/followers').post(userController.profileFollowers);  

  app.route('/profile/allbums').post(userController.profileLikedFanpage);    

  app.route('/profile/groups').post(userController.profileAllbums);  
  
  app.route('/profile/Fanpage').post(userController.profileJoinedGroups);  
  
  app.route('/profile/photo').post(userController.profilePhoto);  

  //===============
  
  app.route('/profile/followers/paging').post(userController.profilePagingFollowers);
}
