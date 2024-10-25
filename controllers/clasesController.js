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

exports.crearClase = (req, res) => {
  const { Nombre, ID_Profesor, Horario } = req.body;

  Clase.crearClase(Nombre, ID_Profesor, Horario, (err, clases) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.status(200).send("Clase registrada exitosamente");
  });
};

exports.obtenerTodasClases = (req, res) => {
  Clase.obtenerTodasClases((err, clases) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.status(200).json(clases);
  });
};
