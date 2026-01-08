export async function llamadaAPI() {
    let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
    let data = await respuesta.json()
    return data.results
}