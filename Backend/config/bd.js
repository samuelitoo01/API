import mysql2 from 'mysql2' ; 
import { config } from 'dotenv';

config()

export const datosConexion = mysql2.createConnection({
    host : process.env.HOST ,  
    user : process.env.USER_DB ,
    password : '' , 
    database : process.env.DATABASE 
   
})
console.log(process.env.USER_DB)
// conexion a la base de datos de mysql 

export const conexionBaseDeDatos = datosConexion.connect((e) => {
    if(e){
        console.log('Algo ha salido mal en la conexion de la base de datos ' + e )
        return
    }else {

    console.log('conexion exitosa con la base de datos ');
}
})


