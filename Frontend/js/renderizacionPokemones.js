export function renderizacionPokemones(pokemonData) {
    const container = document.querySelector('.pokemon-containerq');

    for (let i = 0; i < pokemonData.length; i++) {
        const pokemon = pokemonData[i];

        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-container');

        pokemonCard.innerHTML = `
            <h2>${pokemon.name}</h2>
        `;

        container.appendChild(pokemonCard);
    }
}
