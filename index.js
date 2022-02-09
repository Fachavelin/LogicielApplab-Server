const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./db/config');

/* Crear servidor de express */
const app = express();

/* Conexion a la base de datos */
dbConnection();

/* Cors */
app.use(cors());

/* Lectura y parseo de Json */
app.use(express.json());

/* Rutas */
app.use('/api/contacto', require('./routes/contacto'));
app.use('/api/webpage', require('./routes/webpage'));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
