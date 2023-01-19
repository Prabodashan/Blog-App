const express = require("express");

const router = express.Router();

const {
  getPosts,
  addPost,
  deletePost,
  updatePost,
} = require("../Controllers/post");

router.get("/", getPosts);
router.get("/:id", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router;
