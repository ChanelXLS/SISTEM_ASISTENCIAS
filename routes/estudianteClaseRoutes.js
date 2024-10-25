const express = require("express");
const router = express.Router();
const estudianteClaseController = require("../controllers/estudianteClaseController");

router.post("/", estudianteClaseController.inscribirEstudiante);

module.exports = router;
