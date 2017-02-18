var Blog = require('./blogModel.js');
var Q = require('q');
// Promisify a few mongoose methods with the `q` promise library

var findAllBlogs = Q.nbind(Blog.find, Blog);
var createBlog = Q.nbind(Blog.create, Blog);




module.exports = {


	getAllBlogs : function(req,res){
		Blog.find()
		.sort({date: -1})
		.exec(function(error,blogs){
			if(error){
				res.status(500).send(error);
			} else {
				res.json(blogs);
			}
		});
	},

	newBlog : function(req,res,next){
		console.log(req.body)
		var newBlog = new Blog ({
			title : req.body.title,
			blog : req.body.blog,
			from:req.body.blog 
		});

		newBlog.save(function(err, newBlog){
			if(err){
			    res.status(500).send(err);
			  }else{
			    res.json(newBlog)
	 		};
		});
	}
}
