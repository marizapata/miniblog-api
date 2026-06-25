// Validación de parámetros ID

const validateId = (req, res, next) => {
  const { id, authorId } = req.params;

  const value = id || authorId;

  if (!value || isNaN(Number(value))) {
    return res.status(400).json({
      message: "El parámetro de la URL debe ser un número válido",
    });
  }

  next();
};

module.exports = validateId;