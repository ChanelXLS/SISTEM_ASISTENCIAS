const express = require("express");
const router = express.Router();
const estudianteClaseController = require("../controllers/estudianteClaseController");

router.post("/", estudianteClaseController.inscribirEstudiante);
router.delete("/", estudianteClaseController.eliminarEstudianteDeClase);

module.exports = router;
