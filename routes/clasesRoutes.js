// routes/clasesRoutes.js
const express = require("express");
const router = express.Router();
const clasesController = require("../controllers/clasesController");

// Ruta para obtener clases de un usuario por su ID de profesor
router.get("/:id_profesor", clasesController.obtenerClasesPorProfesor);
router.post("/", clasesController.crearClase);
router.get("/", clasesController.obtenerTodasClases);

// Nueva ruta para crear una clase
router.post("/", clasesController.crearClase);

module.exports = router;
