import { useContext, useEffect } from 'react';
import { FindPokemonNameContext } from '../state/Context';

function useGameIsCompleted() {
  const { state, setScore, setGameStatus } = useContext(FindPokemonNameContext);
  const { score, pokemon, playerFounds } = state;
  const { nameArray } = pokemon;

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
}

export default useGameIsCompleted;
