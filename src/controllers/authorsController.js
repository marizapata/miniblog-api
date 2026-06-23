// Controlador de autores
const {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../services/authorsService");

// GET /authors
const getAuthors = async (req, res) => {
  try {
    const authors = await getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener autores" });
  }
};

// GET /authors/:id
const getAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await getAuthorById(id);

    if (!author) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }

    res.status(200).json(author);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el autor" });
  }
};

// POST /authors
const addAuthor = async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Los campos name y email son obligatorios",
      });
    }

    const newAuthor = await createAuthor({ name, email, bio });
    res.status(201).json(newAuthor);
  } catch (error) {
    console.error(error);

    if (error.code === "23505") {
      return res.status(400).json({
        message: "Ya existe un autor con ese email",
      });
    }

    res.status(500).json({ message: "Error al crear autor" });
  }
};

// PUT /authors/:id
const editAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, bio } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Los campos name y email son obligatorios",
      });
    }

    const updatedAuthor = await updateAuthor(id, { name, email, bio });

    if (!updatedAuthor) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }

    res.status(200).json(updatedAuthor);
  } catch (error) {
    console.error(error);

    if (error.code === "23505") {
      return res.status(400).json({
        message: "Ya existe un autor con ese email",
      });
    }

    res.status(500).json({ message: "Error al actualizar autor" });
  }
};

// DELETE /authors/:id
const removeAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await deleteAuthor(id);

    if (!deletedAuthor) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }

    res.status(200).json({
      message: "Autor eliminado correctamente",
      author: deletedAuthor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar autor" });
  }
};

module.exports = {
  getAuthors,
  getAuthor,
  addAuthor,
  editAuthor,
  removeAuthor,
};