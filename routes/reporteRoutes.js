const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

router.get('/:id_clase', reporteController.generarReporte);

module.exports = router;
