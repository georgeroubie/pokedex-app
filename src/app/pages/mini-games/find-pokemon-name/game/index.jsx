import { useContext } from 'react';
import { AppContext } from '../../../../state/Context';
import { FindPokemonNameProvider } from '../state/Context';
import FindPokemonNameGameWrapper from './Wrapper';

const FindPokemonNameGame = () => {
  const { state } = useContext(AppContext);
  const { pokemonNames } = state;

  return (
    <FindPokemonNameProvider pokemonNames={pokemonNames}>
      <FindPokemonNameGameWrapper />
    </FindPokemonNameProvider>
  );
};

export default FindPokemonNameGame;
