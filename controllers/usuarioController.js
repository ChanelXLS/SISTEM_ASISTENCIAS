const Usuario = require("../models/usuarioModel");
const bcrypt = require("bcrypt"); // Para encriptar y comparar contraseñas
const jwt = require("jsonwebtoken"); // Para generar tokens JWT (opcional pero recomendable para autenticar)

// Registrar usuario
exports.registrarUsuario = (req, res) => {
  const { Nombre, Apellido, Email, Contrasena, Tipo_Usuario } = req.body;

  // Encriptar la contraseña antes de guardarla
  bcrypt.hash(Contrasena, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send("Error al encriptar la contraseña");
    }

    // Guardar el usuario con la contraseña encriptada
    Usuario.registrar(
      Nombre,
      Apellido,
      Email,
      hashedPassword,
      Tipo_Usuario,
      (err, result) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).send("Usuario registrado exitosamente");
      }
    );
  });
};

exports.loginUsuario = (req, res) => {
  const { Email, Contrasena } = req.body;

  Usuario.obtenerPorEmail(Email, (err, usuario) => {
    if (err || !usuario) {
      return res.status(404).send("Usuario no encontrado");
    }

    bcrypt.compare(Contrasena, usuario.Contrasena, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).send("Contraseña incorrecta");
      }

      const token = jwt.sign(
        { id: usuario.id, email: usuario.Email, tipo: usuario.Tipo_Usuario },
        process.env.DB_SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        mensaje: "Login exitoso",
        token: token,
        usuario: {
          id_usuario: usuario.ID_Usuario,
          nombre: usuario.Nombre,
          apellido: usuario.Apellido,
          email: usuario.Email,
          tipo: usuario.Tipo_Usuario,
        },
      });
    });
  });
};

exports.obtenerEstudiantesPorClase = (req, res) => {
  const { ID_Clase } = req.params;

  Usuario.obtenerEstudiantesPorClase(ID_Clase, (err, result) => {
    if (err) {
      console.error("Error en la consulta SQL: ", err);
      return res.status(500).send("Error al obtener los estudiantes");
    }

    res.status(200).json(result);
  });
};

exports.obtenerTodosEstudiantes = (req, res) => {
  Usuario.obtenerTodosEstudiantes((err, result) => {
    if (err) {
      console.error("Error en la consulta SQL: ", err);
      return res.status(500).send("Error al obtener los estudiantes");
    }

    res.status(200).json(result);
  });
};

exports.obtenerTodosProfesores = (req, res) => {
  Usuario.obtenerTodosProfesores((err, result) => {
    if (err) {
      console.error("Error en la consulta SQL: ", err);
      return res.status(500).send("Error al obtener los profesores");
    }

    res.status(200).json(result);
  });
};
