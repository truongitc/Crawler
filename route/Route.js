module.exports = function(app){

  var userController = require('../controller/Profile');

  app.route('/profile/friend-list').post(userController.profileFriendList);

}
