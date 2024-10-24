const db = require("../config/database");

const Usuario = {};

// Registrar un nuevo usuario
Usuario.registrar = (
  Nombre,
  Apellido,
  Email,
  Contrasena,
  Tipo_Usuario,
  callback
) => {
  const query =
    "INSERT INTO Usuarios (Nombre, Apellido, Email, Contrasena, Tipo_Usuario) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [Nombre, Apellido, Email, Contrasena, Tipo_Usuario],
    callback
  );
};

// Obtener un usuario por Email para el proceso de login
Usuario.obtenerPorEmail = (Email, callback) => {
  const query = "SELECT * FROM Usuarios WHERE Email = ?";
  db.query(query, [Email], (err, result) => {
    if (err || result.length === 0) {
      return callback(err, null);
    }
    callback(null, result[0]); // Devolver el primer resultado (asume que los emails son únicos)
  });
};

module.exports = Usuario;
