// Rutas de autores
const express = require("express");
const router = express.Router();

const {
  getAuthors,
  getAuthor,
  addAuthor,
  editAuthor,
  removeAuthor,
} = require("../controllers/authorsController");

const validateAuthor = require("../middlewares/validateAuthor");
const validateId = require("../middlewares/validateId");

router.get("/", getAuthors);
router.get("/:id", validateId, getAuthor);
router.post("/", validateAuthor, addAuthor);
router.put("/:id", validateId, validateAuthor, editAuthor);
router.delete("/:id", validateId, removeAuthor);

module.exports = router;