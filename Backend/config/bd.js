import mysql2 from 'mysql2' ; 
import { config } from 'dotenv';

config()

const conexion = mysql2.createConnection({
    host : process.env.HOST ,  
    user : process.env.USER_DB ,
    password : '' , 
    database : process.env.DATABASE 
   
})
console.log(process.env.USER_DB)
// conexion a la base de datos de mysql 

export const conexionBaseDeDatos = conexion.connect((e) => {
    if(e){
        console.log('Algo ha salido mal en la conexion de la base de datos ' + e )
        return
    }

    console.log('conexion exitosa con la base de datos ');

    conexion.query('SELECT * FROM usuarios' , (e , results , fields )=>{
        if(e){
            console.log('Hubo un problema al obtener los datos de la bd');
        }

        console.log(results)

    })
})

