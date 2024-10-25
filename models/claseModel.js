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

<<<<<<< HEAD
// Nueva función para crear una clase
Clase.crearClase = (Nombre, ID_Profesor, Horario, callback) => {
  const query = "INSERT INTO Clases (Nombre, ID_Profesor, Horario) VALUES (?, ?, ?)";
  db.query(query, [Nombre, ID_Profesor, Horario], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
=======
Clase.crearClase = (Nombre, ID_Profesor, Horario, callback) => {
  const query =
    "INSERT INTO Clases (Nombre, ID_Profesor, Horario) VALUES(?, ?, ?)";
  db.query(query, [Nombre, ID_Profesor, Horario], callback);
>>>>>>> ea7aad209ec8b19684d0aa1d0acb3f7d18700b0c
};

module.exports = Clase;
