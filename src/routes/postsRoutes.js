// Rutas de posts
const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPost,
  getPostsByAuthor,
  addPost,
  editPost,
  removePost,
} = require("../controllers/postsController");

router.get("/", getPosts);
router.get("/author/:authorId", getPostsByAuthor);
router.get("/:id", getPost);
router.post("/", addPost);
router.put("/:id", editPost);
router.delete("/:id", removePost);

module.exports = router;