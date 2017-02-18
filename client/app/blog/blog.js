angular.module('shortly.blog', [])


.controller('BlogController', function ($scope, $location, Blogs) {

  $scope.blogs = {}
  $scope.addBlog = function () {
    $scope.loading = true;
    Blogs.addOne($scope.blogs)
      .then(function () {
        // $scope.loading = false;
        $scope.status = 200 ;
       initializeBlogs()
           // console.log($scope.data.Blogs) 

      })
      .catch(function (error) {
        console.log(error);
      });
  };



  $scope.x = {};
  // console.log($scope.data)

  var initializeBlogs = function () {

    Blogs.getAll()
      .then(function (Blogs) {
      	// $scope.data.title = title ;
      	// $scope.data.name = name ; 
        // console.log(Blogs)
        $scope.x = Blogs;
        // console.log($scope.data.Blogs)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeBlogs();
  });

// .controller('newBlogController', function ($scope, $mdDialog, Blogs) {

//   $scope.blog = {};
  
//   // A flag to check if inputs filled or not
//   $scope.filled = true;
  
//   $scope.hide = function() {
//       $mdDialog.hide();
//   };
  
//   $scope.cancel = function() {
//       $mdDialog.cancel();
//   };

//   $scope.answer = function() {

//     $scope.filled = true;
//     // checking if all inputs are filled
//     if(!$scope.blog.title || !$scope.blog.blog){
//       handleBlogInputs($scope,'Please fill all fields');
//     } else {
//       $scope.blog.username = window.username;
//       // adding a blog
//       Blogs.addOne($scope.blog)
//       .then(function(response){
//         if(response.status === 200){
//           //clearing input boxes
//           clearBlogInputBoxes($scope);
//           $mdDialog.hide();
//         } else {
//           alert('Something Went Wrong, Please Try Again!');
//         }
//       })
//       .catch(function(error){
//         console.log(error);
//       });
//     }
//   };

// });
  
// var handleBlogInputs = function($scope, msg){
//   clearBlogInputBoxes($scope);
//   $scope.filled = false;
//   $scope.errorMsg = msg;
// };

// // function to clear the input boxes
// var clearBlogInputBoxes = function($scope) {
//   $scope.blog.username = '';
//   $scope.blog.title = '';
//   $scope.blog.blog = '';
// };


// .controller('BlogController', function ($scope, $mdDialog, $mdMedia, Blogs, Dialogs) {
// 	$scope.data = {};

// 	// calling the isAuth function to know whether the user has signed in or not yet
// 	$scope.auth = Auth.isAuth;

// 	$scope.initalize = function(){

// 		Blogs.getAll()
// 		.then(function(blogs){
// 			$scope.data.blogs = blogs;
// 			Users.getAll()
// 			.then(function(users){
// 				// getting the image and fullname for each user to add it to the blog
// 				for(var i=0; i<$scope.data.blogs.length; i++){
// 					for(var j=0; j<users.length; j++){
// 						if($scope.data.blogs[i].from === users[j].username){
// 							$scope.data.blogs[i].image = users[j].image;
// 							$scope.data.blogs[i].name = users[j].firstName + ' ' + users[j].lastName;
// 							break;
// 						}
// 					}
// 				}
// 			})
// 			.catch(function(error){
// 				console.log(error);
// 			});
// 		})
// 		.catch(function(error){
// 			console.log(errors);
// 		});
// 	};
	
// 	$scope.addPost = function(ev) {
//     // for more info about the parameters we're passing here
//     // check the documentation in the showDialog function
//     // in the Dialogs factory in the services.js file
// 	  Dialogs.showDialog($scope,$mdDialog,$mdMedia,
//       'newBlogController','app/blog/newBlog.html',ev,
//       {},function(answer){
//         $scope.initalize();
//       },function(){
//         $scope.status = 'You cancelled the dialog.';
//       });
//   	};

// 	$scope.initalize();
// });
