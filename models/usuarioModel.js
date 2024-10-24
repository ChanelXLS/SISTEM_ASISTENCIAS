const db = require('../config/database');

const Usuario = {};

Usuario.registrar = (Nombre, Apellido, Email, Contrasena, Tipo_Usuario, callback) => {
    const query = 'INSERT INTO Usuarios (Nombre, Apellido, Email, Contraseña, Tipo_Usuario) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [Nombre, Apellido, Email, Contrasena, Tipo_Usuario], callback);
};

module.exports = Usuario;
