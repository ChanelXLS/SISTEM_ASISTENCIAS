const EstudianteClase = require("../models/estudianteClaseModel");

exports.inscribirEstudiante = (req, res) => {
  const { ID_Estudiante, ID_Clase } = req.body;

  EstudianteClase.inscribir(ID_Estudiante, ID_Clase, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send("Estudiante inscrito exitosamente");
  });
};
