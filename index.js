// Inicio de la aplicación

const pool = require("./src/db/db");

pool.connect()
  .then(() => {
    console.log("Conectado a PostgreSQL");
  })
  .catch((error) => {
    console.error("Error de conexión:", error.message);
  });