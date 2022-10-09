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
  return pokemon;
}

export default getRandomPokemon;
