import { useContext, useEffect, useRef } from 'react';
import PageWrapper from '../../../../components/layout/PageWrapper';
import PokedexBottom from '../../../../components/layout/PokedexBottom';
import PokedexTop from '../../../../components/layout/PokedexTop';
import { FindPokemonNameContext } from '../state/Context';
import BlurredPokemon from './BlurredPokemon';
import SelectLetter from './SelectLetter';

const FindPokemonNameGameWrapper = () => {
  const rendered = useRef(false);
  const { startGame } = useContext(FindPokemonNameContext);

  useEffect(() => {
    if (!rendered.current) {
      startGame();
      rendered.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageWrapper>
      <PokedexTop>
        <BlurredPokemon />
      </PokedexTop>
      <PokedexBottom>
        <SelectLetter />
      </PokedexBottom>
    </PageWrapper>
  );
};

export default FindPokemonNameGameWrapper;
