import { Router } from "express";
import { getusuarios , postUsuarios , eliminarUsuarioController} from "../controllers/user.controller.js";

const router = Router(); 

router.get('/obtener' , getusuarios);
router.post('/obtener' , postUsuarios);
router.delete('/obtener/:id' , eliminarUsuarioController )
export default router