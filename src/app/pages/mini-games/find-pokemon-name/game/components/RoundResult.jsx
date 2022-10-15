import { useCallback, useContext, useEffect } from 'react';
import { FindPokemonNameContext } from '../state/Context';

const RoundResult = () => {
  const { state, startGame } = useContext(FindPokemonNameContext);
  const { gameStatus } = state;

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

  const buttonLabel = gameStatus === 'win' ? 'NEXT POKEMON' : 'TRY AGAIN';

  return <button onClick={startGame}>{buttonLabel}</button>;
};

export default RoundResult;
