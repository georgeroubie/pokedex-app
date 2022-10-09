import { useContext } from 'react';
import { AppContext } from '../../../../state/Context';
import GameWrapper from './layout/Wrapper';
import { FindPokemonNameProvider } from './state/Context';

const FindPokemonNameGame = () => {
  const { state } = useContext(AppContext);
  const { pokemonNames } = state;

  return (
    <FindPokemonNameProvider pokemonNames={pokemonNames}>
      <GameWrapper />
    </FindPokemonNameProvider>
  );
};

export default FindPokemonNameGame;
