import { Router } from "express";
import { getusuarios , postUsuarios } from "../controllers/user.controller.js";

const router = Router(); 

router.get('/obtener' , getusuarios);
router.post('/obtener' , postUsuarios);
export default router