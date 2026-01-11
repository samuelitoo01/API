// Creamos los controladores de la web para administrar los usuarios por medio de metodos HTPS

import { obtenerUsuarios , guardarUsuario , eliminarUsuario , actualizarUsuario} from "../models/user.models.js";

export async function getusuarios(req , res) {
    
    try{

        const usuarios = await obtenerUsuarios()
        res.status(200).json(usuarios)

    }catch(e){

        res.status(500).json({
            message : 'Algo ha salido mal ' + e 
        })

    }

}


export function postUsuarios(req, res) {
    const { nombre , correo } = req.body;

    if (!nombre || !correo) {
        return res.status(400).json({
            message: 'Todos los campos son obligatorios'
        });
    }

    guardarUsuario({ nombre, correo }, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear usuario',
                error: error.message
            });
        }

        res.status(201).json({
            message: 'Usuario creado correctamente',
            id: result.insertId
        });
    });
}

export function eliminarUsuarioController(req, res) {
    const { id } = req.params;

    eliminarUsuario(id, (error, result) => {
        if (error) {
            return res.status(500).json({
                ok: false,
                mensaje: "Error al eliminar el usuario"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                ok: false,
                mensaje: "Usuario no encontrado"
            });
        }

        res.json({
            ok: true,
            mensaje: "Usuario eliminado correctamente"
        });
    });
}

export const actualizarUsuarioController = (req, res) => {
    const { id } = req.params;
    const { nombre, correo } = req.body;
  
    if (!nombre || !correo) {
      return res.status(400).json({
        ok: false,
        mensaje: "Nombre y correo son obligatorios"
      });
    }
  
    actualizarUsuario(id, nombre, correo, (error, result) => {
      if (error) {
        return res.status(500).json({
          ok: false,
          mensaje: "Error al actualizar el usuario",
          error
        });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({
          ok: false,
          mensaje: "Usuario no encontrado"
        });
      }
  
      res.status(200).json({
        ok: true,
        mensaje: "Usuario actualizado correctamente"
      });
    });
  };