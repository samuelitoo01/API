import { llamadaAPI } from './llamadaAPI.js';
import { renderizacionPokemones } from './renderizacionPokemones.js';
async function main() {
    const respuestaAPI = await llamadaAPI()
    console.log(respuestaAPI)
    renderizacionPokemones(respuestaAPI)
}
main()
