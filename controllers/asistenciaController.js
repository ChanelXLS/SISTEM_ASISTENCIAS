const Asistencia = require("../models/asistenciaModel");

exports.registrarAsistencia = (req, res) => {
  const { ID_Clase, ID_Estudiante, Fecha, Presente } = req.body;

  // Agregamos este log para verificar que los datos se están recibiendo correctamente
  console.log("Datos recibidos:", req.body);

  Asistencia.registrar(
    ID_Clase,
    ID_Estudiante,
    Fecha,
    Presente,
    (err, result) => {
      if (err) {
        // Agregamos este log para ver el error de SQL si ocurre
        console.error("Error en la consulta SQL:", err);
        return res.status(500).send("Error al registrar la asistencia");
      }
      res.status(200).send("Asistencia registrada exitosamente");
    }
  );
};

exports.obtenerPorFechaYClase = (req, res) => {
  const { ID_Clase, Fecha } = req.body;

  Asistencia.obtenerPorFechaYClase(ID_Clase, Fecha, (err, result) => {
    if (err) {
      console.error("Error en la consulta SQL: ", err);
      return res.status(500).send("Error al obtener las asistencias");
    }

    res.status(200).json(result);
  });
};
