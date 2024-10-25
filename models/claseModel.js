// models/claseModel.js
const db = require("../config/database");

const Clase = {};

// Función para obtener clases de un profesor por su ID
Clase.obtenerClasesPorProfesor = (id_profesor, callback) => {
  const query = "SELECT * FROM clases WHERE ID_Profesor = ?";
  db.query(query, [id_profesor], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

Clase.crearClase = (Nombre, ID_Profesor, Horario, callback) => {
  const query =
    "INSERT INTO Clases (Nombre, ID_Profesor, Horario) VALUES(?, ?, ?)";
  db.query(query, [Nombre, ID_Profesor, Horario], callback);
};

Clase.obtenerTodasClases = (callback) => {
  const query = "SELECT * FROM Clases";
  db.query(query, callback);
};

Clase.obtenerClasesEstudiante = (ID_Estudiante, callback) => {
  const query = `
    SELECT c.ID_Clase, c.Nombre, c.Horario
    FROM Clases c
    JOIN estudiantes_clases ec ON c.ID_Clase = ec.ID_Clase
    WHERE ec.ID_Estudiante = ?
  `;
  db.query(query, [ID_Estudiante], callback);
};

module.exports = Clase;
