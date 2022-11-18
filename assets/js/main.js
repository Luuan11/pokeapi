const pokeName = document.querySelector('.poke-name');
const pokeNumber = document.querySelector('.poke-number');
const pokeGif = document.querySelector('.section-pokemon');



const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;

}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokeName.innerHTML = data.name;
    pokeNumber.innerHTML = data.id;
    pokeGif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}
renderPokemon('150')