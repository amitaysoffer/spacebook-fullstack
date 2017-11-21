var mongoose = require('mongoose');



var commentSchema = new mongoose.Schema({

});


var postSchema = new mongoose.Schema({

});

var Post = mongoose.model('post', postSchema)

module.exports = Post
