import { useContext, useEffect, useRef } from 'react';
import PageWrapper from '../../../../../components/layout/PageWrapper';
import PokedexBottom from '../../../../../components/layout/PokedexBottom';
import PokedexTop from '../../../../../components/layout/PokedexTop';
import useGameStatus from '../hooks/useGameStatus';
import { FindPokemonNameContext } from '../state/Context';
import InfoScreen from './InfoScreen';
import InteractionScreen from './InteractionScreen';

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
      <PokedexTop>
        <InfoScreen />
      </PokedexTop>
      <PokedexBottom>
        <InteractionScreen />
      </PokedexBottom>
    </PageWrapper>
  );
};

export default GameWrapper;
