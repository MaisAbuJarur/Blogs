angular.module('shortly.services', [])


.factory('Blogs', function ($http) {

  // function to get all blogs
  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/blogs'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  // function to add a single blog
  var addOne = function (blog) {
    console.log(blog)
    return $http({
      method: 'POST',
      url: '/api/blogs',
      data: blog
    })
    .then(function(resp){
      return resp.data
    })
  
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})



.factory('Auth', function ($http, $location, $window) {
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
