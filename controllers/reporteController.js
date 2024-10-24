const Reporte = require('../models/reporteModel');

exports.generarReporte = (req, res) => {
    const { id_clase } = req.params;

    Reporte.generar(id_clase, (err, results) => {
        if (err) {
            return res.status(500).send('Error al generar el reporte');
        }
        res.status(200).json(results);
    });
};
