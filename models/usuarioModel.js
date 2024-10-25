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

Usuario.obtenerEstudiantesPorClase = (ID_Clase, callback) => {
  const query = `
    SELECT u.ID_Usuario, u.Nombre, u.Apellido 
    FROM Usuarios u 
    JOIN estudiantes_clases ec ON u.ID_Usuario = ec.ID_Estudiante 
    JOIN clases c ON ec.ID_Clase = c.ID_Clase 
    WHERE c.ID_Clase = ?
  `;
  db.query(query, [ID_Clase], callback);
};

Usuario.obtenerTodosEstudiantes = (callback) => {
  const query = "SELECT * FROM Usuarios WHERE Tipo_Usuario = 'Estudiante'";
  db.query(query, callback);
};
module.exports = Usuario;

Usuario.obtenerTodosProfesores = (callback) => {
  const query = "SELECT * FROM Usuarios WHERE Tipo_Usuario = 'Profesor'";
  db.query(query, callback);
};
