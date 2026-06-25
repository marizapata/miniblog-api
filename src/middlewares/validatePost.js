// Validación de posts

const validatePost = (req, res, next) => {
  const { title, content, author_id, published } = req.body;

  // Validar title
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      message: "El campo 'title' es obligatorio y debe ser texto",
    });
  }

  // Validar content
  if (!content || typeof content !== "string" || content.trim() === "") {
    return res.status(400).json({
      message: "El campo 'content' es obligatorio y debe ser texto",
    });
  }

  // Validar author_id
  if (author_id === undefined || author_id === null || isNaN(Number(author_id))) {
    return res.status(400).json({
      message: "El campo 'author_id' es obligatorio y debe ser un número",
    });
  }

  // Validar published si viene
  if (published !== undefined && typeof published !== "boolean") {
    return res.status(400).json({
      message: "El campo 'published' debe ser booleano",
    });
  }

  next();
};

module.exports = validatePost;