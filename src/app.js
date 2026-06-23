// Configuración de Express

const express = require("express");

const authorsRoutes = require("./routes/authorsRoutes");

const app = express();

app.use(express.json());

app.use("/authors", authorsRoutes);

module.exports = app;