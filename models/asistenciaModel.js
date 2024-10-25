const db = require("../config/database");

const Asistencia = {};

Asistencia.registrar = (ID_Clase, ID_Estudiante, Fecha, Presente, callback) => {
  const query =
    "INSERT INTO Asistencia (ID_Clase, ID_Estudiante, Fecha, Presente) VALUES (?, ?, ?, ?)";
  db.query(query, [ID_Clase, ID_Estudiante, Fecha, Presente], callback);
};

Asistencia.obtenerPorFechaYClase = (ID_Clase, Fecha, callback) => {
  const query =
    "SELECT u.ID_Usuario as ID_Estudiante,u.Nombre, u.Apellido, a.Presente FROM Asistencia a JOIN Usuarios u ON a.ID_Estudiante = u.ID_Usuario WHERE a.ID_Clase = ? AND a.Fecha = ?";
  db.query(query, [ID_Clase, Fecha], callback);
};

Asistencia.modificarAsistencia = (
  ID_Clase,
  ID_Estudiante,
  Fecha,
  Presente,
  callback
) => {
  const query =
    "UPDATE Asistencia SET Presente = ? WHERE ID_Clase = ? AND ID_Estudiante = ? AND Fecha = ?";
  db.query(query, [Presente, ID_Clase, ID_Estudiante, Fecha], callback);
};

Asistencia.obtenerTodasDeEstudianteClase = (
  ID_Estudiante,
  ID_Clase,
  callback
) => {
  const query =
    "SELECT * FROM Asistencia WHERE ID_Estudiante = ? AND ID_Clase = ? ORDER BY Fecha DESC";
  db.query(query, [ID_Estudiante, ID_Clase], callback);
};
module.exports = Asistencia;
