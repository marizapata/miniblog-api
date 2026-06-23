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

router.get("/", getAuthors);
router.get("/:id", getAuthor);
router.post("/", addAuthor);
router.put("/:id", editAuthor);
router.delete("/:id", removeAuthor);

module.exports = router;