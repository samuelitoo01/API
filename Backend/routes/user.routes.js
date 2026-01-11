import { Router } from "express";
import { getusuarios , postUsuarios , eliminarUsuarioController , actualizarUsuarioController} from "../controllers/user.controller.js";


const router = Router(); 

router.get('/obtener' , getusuarios);
router.post('/obtener' , postUsuarios);
router.delete('/obtener/:id' , eliminarUsuarioController )
router.put('/obtener/:id' , actualizarUsuarioController)
export default router