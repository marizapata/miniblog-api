// Configuración de Express
const express = require("express");

const authorsRoutes = require("./routes/authorsRoutes");
const postsRoutes = require("./routes/postsRoutes");

const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

// Rutas principales
app.use("/authors", authorsRoutes);
app.use("/posts", postsRoutes);

// Ruta raíz opcional
app.get("/", (req, res) => {
  res.json({
    message: "MiniBlog API funcionando correctamente",
  });
});

// Middleware 404
app.use(notFound);

// Middleware global de errores
app.use(errorHandler);

module.exports = app;