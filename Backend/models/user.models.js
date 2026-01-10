import { datosConexion } from "../config/bd.js";

export const obtenerUsuarios = async() => {
    return new Promise(( resolve , reject ) => {
        datosConexion.query('SELECT * FROM `usuarios`',(e , results) => {
            if(e){
                console.log('Algo ha salido mal al obtener los datos de la bd' + e );
                reject(e)
                return
            }else{
                resolve(results)
            }
        })
    })
}

export const guardarUsuario = (user, callback) => {
    const { nombre, correo } = user;

    const sql = `
        INSERT INTO usuarios (nombre, correo)
        VALUES (?, ?)
    `;

    datosConexion.query(sql, [nombre, correo], (error, result) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, result);
    });
};