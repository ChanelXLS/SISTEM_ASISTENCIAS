// routes/clasesRoutes.js
const express = require("express");
const router = express.Router();
const clasesController = require("../controllers/clasesController");

// Ruta para obtener clases de un usuario por su ID de profesor
router.get("/:id_profesor", clasesController.obtenerClasesPorProfesor);

module.exports = router;
