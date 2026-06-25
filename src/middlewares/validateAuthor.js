// Validación de autores

const validateAuthor = (req, res, next) => {
  const { name, email, bio } = req.body;

  // Validar name
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      message: "El campo 'name' es obligatorio y debe ser texto",
    });
  }

  // Validar email
  if (!email || typeof email !== "string" || email.trim() === "") {
    return res.status(400).json({
      message: "El campo 'email' es obligatorio",
    });
  }

  // Validación simple de formato email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "El email no tiene un formato válido",
    });
  }

  // Validar bio si viene
  if (bio !== undefined && typeof bio !== "string") {
    return res.status(400).json({
      message: "El campo 'bio' debe ser texto",
    });
  }

  next();
};

module.exports = validateAuthor;