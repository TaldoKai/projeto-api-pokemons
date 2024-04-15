async function fetchPokemonData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await response.json();
}
  
async function fetchAndRenderPokemons() {
    const container = document.getElementById('pokemonContainer');
    container.innerHTML = '';
  
    for (let id = 1; id <= 100; id++) {
      const pokemon = await fetchPokemonData(id);
      const type = pokemon.types[0].type.name;
      let typeClass = '';
  
    switch (type) {
        case 'grass': typeClass = 'grama'; break;
        case 'fire': typeClass = 'fogo'; break;
        case 'water': typeClass = 'agua'; break;
        case 'bug': typeClass = 'inseto'; break;
        case 'normal': typeClass = 'normal'; break;
        case 'electric': typeClass = 'eletrico'; break;
        case 'ground': typeClass = 'terra'; break;
        case 'fighting': typeClass = 'lutador'; break;
        case 'psychic': typeClass = 'psiquico'; break;
        case 'rock': typeClass = 'pedra'; break;
        case 'ghost': typeClass = 'fantasma'; break;
        case 'ice': typeClass = 'gelo'; break;
        case 'dragon': typeClass = 'dragao'; break;
        case 'dark': typeClass = 'sombrio'; break;
        case 'steel': typeClass = 'metal'; break;
        case 'fairy': typeClass = 'fada'; break;
        default: typeClass = 'normal';
    }
  
    const card = document.createElement('div');
    card.classList.add('card', typeClass);
    card.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Tipo: ${type === 'grass' ? 'Grama' : 
                   type === 'fire' ? 'Fogo' :
                   type === 'water' ? 'Água' :
                   type === 'bug' ? 'Inseto' :
                   type === 'normal' ? 'Normal' :
                   type === 'electric' ? 'Elétrico' :
                   type === 'ground' ? 'Terra' :
                   type === 'fighting' ? 'Lutador' :
                   type === 'psychic' ? 'Psíquico' :
                   type === 'rock' ? 'Pedra' :
                   type === 'ghost' ? 'Fantasma' :
                   type === 'ice' ? 'Gelo' :
                   type === 'dragon' ? 'Dragão' :
                   type === 'dark' ? 'Sombrio' :
                   type === 'steel' ? 'Metal' :
                   type === 'fairy' ? 'Fada' : 'Normal'}</p>`;
        container.appendChild(card);
    }
}
  
fetchAndRenderPokemons();
  