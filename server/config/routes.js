
var userController = require('../users/userController.js');
var blogController = require('../blogs/blogController.js');

var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {

  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);

app.get('/api/blogs', blogController.getAllBlogs);
app.post('/api/blogs', blogController.newBlog);


  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

