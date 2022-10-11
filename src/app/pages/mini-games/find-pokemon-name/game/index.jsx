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
    if (searchParams.get('only-original-pokemon') === 'yes') {
      return pokemonNames.slice(0, 151);
    }
    return pokemonNames;
  }, [pokemonNames, searchParams]);

  return (
    <FindPokemonNameProvider pokemonNames={pokemons}>
      <GameWrapper />
    </FindPokemonNameProvider>
  );
};

export default FindPokemonNameGame;
