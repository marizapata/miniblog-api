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

const validatePost = require("../middlewares/validatePost");
const validateId = require("../middlewares/validateId");

router.get("/", getPosts);
router.get("/author/:authorId", validateId, getPostsByAuthor);
router.get("/:id", validateId, getPost);
router.post("/", validatePost, addPost);
router.put("/:id", validateId, validatePost, editPost);
router.delete("/:id", validateId, removePost);

module.exports = router;