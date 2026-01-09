import app from './server.js'; 
import { config } from 'dotenv';
import { conexionBaseDeDatos } from './config/bd.js';
import userRoutes from './routes/user.routes.js'

config();

const PORT = process.env.PORT;

app.listen(PORT , () =>{

    console.log(`El servidor esta escuchando en el puerto ${PORT} `);

})

//Conexion con la base de datos
conexionBaseDeDatos

// Rutas 
app.use( '/usuarios' , userRoutes)