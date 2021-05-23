const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Post must have a title"],
  },
  body: {
    type: String,
    require: [true, "Post body can't be empty"],
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
