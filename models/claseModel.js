// models/claseModel.js
const db = require("../config/database");

const Clase = {};

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

module.exports = Clase;
