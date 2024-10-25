const db = require("../config/database");

const EstudianteClase = {};

// Inscribir un estudiante a una clase
EstudianteClase.inscribir = (ID_Estudiante, ID_Clase, callback) => {
  const query =
    "INSERT INTO Estudiantes_Clases(ID_Estudiante, ID_Clase) VALUES (?, ?)";
  db.query(query, [ID_Estudiante, ID_Clase], callback);
};

EstudianteClase.eliminarEstudianteDeClase = (
  ID_Estudiante,
  ID_Clase,
  callback
) => {
  const query =
    "DELETE FROM Estudiantes_Clases WHERE ID_Estudiante = ? AND ID_Clase = ?";
  db.query(query, [ID_Estudiante, ID_Clase], callback);
};

module.exports = EstudianteClase;
