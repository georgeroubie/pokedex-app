import { randomNumber } from '../../../../../helpers/generators';
import { getPokemonData } from '../../../../../helpers/requests';

async function getRandomPokemon(pokemonNames) {
  const randomIndex = randomNumber(0, pokemonNames.length - 1);
  const pokemon = await getPokemonData(pokemonNames[randomIndex].url);

  // Do not show a pokemon tha has no image
  if (!pokemon.sprites?.front) {
    return await getRandomPokemon(pokemonNames);
  }

  return pokemon;
}

export default getRandomPokemon;
