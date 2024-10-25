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

module.exports = Asistencia;
