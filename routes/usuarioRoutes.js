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

// Ruta para obtener todos los estudiantes
router.get("/estudiantes", usuarioController.obtenerTodosEstudiantes);

// Ruta para obtener todos los profesores
router.get("/profesores", usuarioController.obtenerTodosProfesores);

module.exports = router;
