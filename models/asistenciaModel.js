const db = require('../config/database');

const Asistencia = {};

Asistencia.registrar = (ID_Clase, ID_Estudiante, Fecha, Presente, callback) => {
    const query = 'INSERT INTO Asistencia (ID_Clase, ID_Estudiante, Fecha, Presente) VALUES (?, ?, ?, ?)';
    db.query(query, [ID_Clase, ID_Estudiante, Fecha, Presente], callback);
};

module.exports = Asistencia;
