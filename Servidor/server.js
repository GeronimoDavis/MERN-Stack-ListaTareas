const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectarBD = require('./config/database.js');
const taskRoutes = require('./routes/task.js');

dotenv.config();//carga variables de entorno
conectarBD();
const app = express();

app.use(cors());//activar cors
app.use(express.json());//decirle a la app que va a recibir json

app.use("/api/tasks", taskRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});