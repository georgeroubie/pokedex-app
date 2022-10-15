import { useCallback, useContext, useEffect } from 'react';
import SelectLetter from '../components/SelectLetter';
import { FindPokemonNameContext } from '../state/Context';

const InteractionScreen = () => {
  const { state, startGame } = useContext(FindPokemonNameContext);
  const { pokemon, gameStatus } = state;

  const onKeyDown = useCallback(
    (e) => {
      if (gameStatus !== 'win' && gameStatus !== 'lost') {
        return;
      }

      const { code } = e;

      if (code !== 'Enter' && code !== 'Space') {
        return;
      }

      startGame();
    },
    [gameStatus, startGame],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown, false);
    return () => window.removeEventListener('keydown', onKeyDown, false);
  }, [onKeyDown]);

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
