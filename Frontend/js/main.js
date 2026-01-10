// Este es el archivo principal a donde se importaran todos los modulos del frontend 
import { addDataStudent, renderizarDatosBd , eliminarDatos } from "./ui.js"; 
// Funcion para obtener los datos de ui (interfaz de usuario) y enviarlos por medio del fetch 
// al backend para que los agregue a la base de datos

addDataStudent();
renderizarDatosBd()
eliminarDatos()