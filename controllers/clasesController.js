// controllers/clasesController.js
const Clase = require("../models/claseModel");

exports.obtenerClasesPorProfesor = (req, res) => {
  const id_profesor = req.params.id_profesor;

  Clase.obtenerClasesPorProfesor(id_profesor, (err, clases) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error al obtener las clases del profesor" });
    }

    res.status(200).json(clases);
  });
};