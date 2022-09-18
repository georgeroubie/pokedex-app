import { useContext, useMemo } from 'react';
import { randomNumber } from '../../../../helpers/generators';
import { transformPokemonApiUrlToPokemonId } from '../../../../helpers/requests';
import { AppContext } from '../../../../state/Context';
import { INVALID_CHARACTERS } from '../constants';

function useGetRandomPokemonId() {
  const { state } = useContext(AppContext);
  const { pokemonNames } = state;

  const randomPokemon = useMemo(() => {
    if (!pokemonNames?.length) {
      return null;
    }

    const availablePokemons = pokemonNames.filter(({ name }) => {
      let includePokemon = true;
      INVALID_CHARACTERS.forEach((character) => {
        if (name.includes(character)) {
          includePokemon = false;
        }
      });
      return includePokemon;
    });

    const randomIndex = randomNumber(0, availablePokemons.length);
    const pokemonData = availablePokemons[randomIndex];
    return transformPokemonApiUrlToPokemonId(pokemonData.url);
  }, [pokemonNames]);

  return randomPokemon;
}

export default useGetRandomPokemonId;
