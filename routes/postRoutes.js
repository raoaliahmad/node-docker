const express = require("express");
const postContoller = require("../controllers/postController");

const router = express.Router();

router.route("/").get(postContoller.getAllPosts).post(postContoller.createPost);

router
  .route("/:id")
  .get(postContoller.getOnePost)
  .patch(postContoller.updatePost)
  .delete(postContoller.deletePost);

module.exports = router;
