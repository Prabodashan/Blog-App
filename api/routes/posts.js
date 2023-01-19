const express = require("express");

const router = express.Router();

const {
  getPosts,
  addPost,
  deletePost,
  updatePost,
  getPost,
} = require("../Controllers/post");

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router;
