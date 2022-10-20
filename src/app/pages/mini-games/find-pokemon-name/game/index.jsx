import { useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../../../../state/Context';
import GameWrapper from './layout/Wrapper';
import { FindPokemonNameProvider } from './state/Context';

const FindPokemonNameGame = () => {
  const [searchParams] = useSearchParams();
  const { state } = useContext(AppContext);
  const { pokemonNames } = state;

  const pokemons = useMemo(() => {
    const availablePokemons = pokemonNames.filter(({ name }) => {
      if (name.includes('-')) {
        return false;
      }
      return true;
    });

    if (searchParams.get('only-original-pokemon') === 'yes') {
      // The nidoran-f and nidoran-m are removed that's why instead
      // of 151 the original pokemons for the game are 149
      return availablePokemons.slice(0, 149);
    }

    return availablePokemons;
  }, [pokemonNames, searchParams]);

  return (
    <FindPokemonNameProvider pokemonNames={pokemons}>
      <GameWrapper />
    </FindPokemonNameProvider>
  );
};

export default FindPokemonNameGame;
