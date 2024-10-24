const Usuario = require('../models/usuarioModel');

exports.registrarUsuario = (req, res) => {
    const { Nombre, Apellido, Email, Contrasena, Tipo_Usuario } = req.body;
    
    Usuario.registrar(Nombre, Apellido, Email, Contrasena, Tipo_Usuario, (err, result) => {
        if (err) {
            return res.status(500).send('Error al registrar el usuario');
        }
        res.status(200).send('Usuario registrado exitosamente');
    });
};
