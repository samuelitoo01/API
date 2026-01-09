import cors from 'cors';
import express from 'express';
import { config } from 'dotenv';

config();
const app = express()
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT 

app.listen( PORT , () => {

    console.log(`Servidor escuchando en el puerto https://localhost:${PORT}`)

})

app.get('/' , (req , res) =>{

    res.send('Esta es la ruta principal del servidor ... ');

})