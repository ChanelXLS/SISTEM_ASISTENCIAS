const db = require('../config/database');

const Reporte = {};

Reporte.generar = (id_clase, callback) => {
    const query = `
        SELECT u.Nombre, u.Apellido, a.Fecha, a.Presente 
        FROM Asistencia a
        JOIN Usuarios u ON a.ID_Estudiante = u.ID_Usuario
        WHERE a.ID_Clase = ?`;
        
    db.query(query, [id_clase], callback);
};

module.exports = Reporte;
