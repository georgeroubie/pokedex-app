import { useContext } from 'react';
import SelectLetter from '../components/SelectLetter';
import { FindPokemonNameContext } from '../state/Context';

const InteractionScreen = () => {
  const { state } = useContext(FindPokemonNameContext);
  const { pokemon } = state;

  if (!pokemon?.name) {
    return null;
  }

  return <SelectLetter />;
};

export default InteractionScreen;
