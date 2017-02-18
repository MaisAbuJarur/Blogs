angular.module('shortly', [
  'shortly.auth',
  'shortly.blog',
  'shortly.services',
  

  'ngRoute'

])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })

    
 .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    

    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'

    })
     .when('/blogs', {
      templateUrl: 'app/blog/blog.html',
      controller: 'BlogController'
    })

    .otherwise({
      redirectTo: '/signin'
    });
    
})
