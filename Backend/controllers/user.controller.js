// Creamos los controladores de la web para administrar los usuarios por medio de metodos HTPS

import { obtenerUsuarios , guardarUsuario } from "../models/user.models.js";

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