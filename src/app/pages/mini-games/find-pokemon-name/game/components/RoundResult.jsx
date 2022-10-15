import { useCallback, useContext, useEffect, useMemo } from 'react';
import { FindPokemonNameContext } from '../state/Context';

const RoundResult = () => {
  const { state, startGame } = useContext(FindPokemonNameContext);
  const { gameStatus } = state;

  const onKeyDown = useCallback(
    (e) => {
      const { code } = e;

      if (code !== 'Enter' && code !== 'Space') {
        return;
      }

      startGame();
    },
    [startGame],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown, false);
    return () => window.removeEventListener('keydown', onKeyDown, false);
  }, [onKeyDown]);

  const buttonLabel = useMemo(() => (gameStatus === 'win' ? 'NEXT POKEMON' : 'TRY AGAIN'), [gameStatus]);

  return <button onClick={startGame}>{buttonLabel}</button>;
};

export default RoundResult;
