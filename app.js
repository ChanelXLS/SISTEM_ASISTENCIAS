const express = require("express");
const cors = require("cors"); // Importa cors
const app = express();
const port = process.env.PORT || 3000;

// Permitir solicitudes desde el puerto 3001 (o cualquier otro origen que prefieras)
const corsOptions = {
  origin: "http://localhost:3001", // Cambia esto si tu frontend corre en otro puerto o dominio
  optionsSuccessStatus: 200, // Algunas versiones de navegadores antiguos pueden necesitar este status
};

app.use(cors(corsOptions)); // Usa cors con las opciones que configuraste

// Middlewares
app.use(express.json());

// Rutas
const asistenciaRoutes = require("./routes/asistenciaRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const reporteRoutes = require("./routes/reporteRoutes");
const clasesRoutes = require("./routes/clasesRoutes");

app.use("/asistencia", asistenciaRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/reporte", reporteRoutes);
app.use("/clases", clasesRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
