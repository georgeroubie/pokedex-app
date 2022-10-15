import { useContext } from 'react';
import RoundResult from '../components/RoundResult';
import SelectLetter from '../components/SelectLetter';
import { FindPokemonNameContext } from '../state/Context';

const InteractionScreen = () => {
  const { state } = useContext(FindPokemonNameContext);
  const { pokemon, gameStatus } = state;

  if (!pokemon?.name) {
    return null;
  }

  if (gameStatus === 'win' || gameStatus === 'lost') {
    return <RoundResult />;
  }

  return <SelectLetter />;
};

export default InteractionScreen;
