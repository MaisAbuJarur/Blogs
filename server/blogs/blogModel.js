var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Blogs table here.
var blogSchema = new Schema({
	from : {type: String , required: true},
	title : {type : String , required: true},
	blog : {type : String , required: true}
});


// blogSchema.pre('save', function (next) {
//   next();
// });

var Blog = mongoose.model('Blog' ,  blogSchema);


module.exports = Blog;

