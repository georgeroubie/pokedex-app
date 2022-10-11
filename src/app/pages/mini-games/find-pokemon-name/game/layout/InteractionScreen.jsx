import { useContext } from 'react';
import SelectLetter from '../components/SelectLetter';
import { FindPokemonNameContext } from '../state/Context';

const InteractionScreen = () => {
  const { state, startGame } = useContext(FindPokemonNameContext);
  const { pokemon, gameStatus } = state;

  if (!pokemon?.name) {
    return null;
  }

  if (gameStatus === 'win') {
    return <button onClick={startGame}>NEXT POKEMON</button>;
  }

  if (gameStatus === 'lost') {
    return <button onClick={startGame}>TRY AGAIN</button>;
  }

  return <SelectLetter />;
};

export default InteractionScreen;
