import { useContext, useEffect } from 'react';
import { FindPokemonNameContext } from '../state/Context';

function useGameStatus() {
  const { state, setScore, setGameStatus } = useContext(FindPokemonNameContext);
  const { lives, score, pokemon, playerFounds } = state;
  const { nameArray } = pokemon;

  // Check if player won
  useEffect(() => {
    let wasFound = true;

    if (playerFounds.length) {
      playerFounds.forEach((letter, index) => {
        if (letter !== nameArray[index]) {
          wasFound = false;
        }
      });
    } else {
      wasFound = false;
    }

    if (wasFound) {
      setScore(score + 1);
      setGameStatus('win');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameArray, playerFounds]);

  // Check if player lost
  useEffect(() => {
    if (lives === 0) {
      setGameStatus('lost');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lives]);
}

export default useGameStatus;
