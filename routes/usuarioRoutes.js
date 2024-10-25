const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/", usuarioController.registrarUsuario);

// Ruta para el login
router.post("/login", usuarioController.loginUsuario);

<<<<<<< HEAD
module.exports = router;
=======
// Ruta para obtener los estudiantes de una clase
router.get(
  "/estudiantes/clase/:ID_Clase",
  usuarioController.obtenerEstudiantesPorClase
);

// Ruta para obtener todos los estudiantes
router.get("/estudiantes", usuarioController.obtenerTodosEstudiantes);

module.exports = router;
>>>>>>> ea7aad209ec8b19684d0aa1d0acb3f7d18700b0c
