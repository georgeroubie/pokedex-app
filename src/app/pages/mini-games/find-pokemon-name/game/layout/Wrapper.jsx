import { useContext, useEffect, useRef } from 'react';
import PageWrapper from '../../../../../components/layout/PageWrapper';
import useGameStatus from '../hooks/useGameStatus';
import { FindPokemonNameContext } from '../state/Context';
import Bottom from './Bottom';
import Top from './Top';

const GameWrapper = () => {
  const isGameStarted = useRef(false);
  const { startGame } = useContext(FindPokemonNameContext);
  useGameStatus();

  useEffect(() => {
    if (!isGameStarted.current) {
      startGame();
      isGameStarted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper>
      <Top />
      <Bottom />
    </PageWrapper>
  );
};

export default GameWrapper;
