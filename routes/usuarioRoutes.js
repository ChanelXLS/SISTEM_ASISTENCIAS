const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/", usuarioController.registrarUsuario);

// Ruta para el login
router.post("/login", usuarioController.loginUsuario);

// Ruta para obtener los estudiantes de una clase
router.get(
  "/estudiantes/clase/:ID_Clase",
  usuarioController.obtenerEstudiantesPorClase
);

module.exports = router;
