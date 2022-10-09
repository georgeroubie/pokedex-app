import { randomNumber } from '../../../../../helpers/generators';
import { getPokemonData } from '../../../../../helpers/requests';

async function getRandomPokemon(pokemonNames) {
  const availablePokemons = pokemonNames.filter(({ name }) => {
    if (name.includes('-')) {
      return false;
    }
    return true;
  });

  const randomIndex = randomNumber(0, availablePokemons.length - 1);
  const pokemon = await getPokemonData(availablePokemons[randomIndex].url);

  // Do not show a pokemon tha has no image
  if (!pokemon.sprites.front) {
    return await getRandomPokemon(pokemonNames);
  }

  return pokemon;
}

export default getRandomPokemon;
