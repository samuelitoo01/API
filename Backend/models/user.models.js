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

export function eliminarUsuario(id, callback) {
    const sql = "DELETE FROM usuarios WHERE id = ?";

    datosConexion.query(sql, [id], (error, result) => {
        if (error) {
            console.log("Error al eliminar usuario:", error);
            callback(error, null);
            return;
        }

        callback(null, result);
    });
}

export function actualizarUsuario(id, nombre, correo, callback) {
    const sql = "UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?";
  
    datosConexion.query(sql, [nombre, correo, id], (error, result) => {
      if (error) {
        console.log("Error al actualizar usuario:", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    });
  }