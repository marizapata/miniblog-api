// Middleware global de manejo de errores

const errorHandler = (err, req, res, next) => {
  console.error("Error capturado por middleware global:", err);

  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: err.message || "Error interno del servidor",
  });
};

module.exports = errorHandler;