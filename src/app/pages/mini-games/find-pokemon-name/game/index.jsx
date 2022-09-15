import { useContext, useMemo } from 'react';
import PageWrapper from '../../../../components/layout/PageWrapper';
import { AppContext } from '../../../../state/Context';
import { INVALID_CHARACTERS } from '../constants';
import FindPokemonNameGameWrapper from './Wrapper';

const FindPokemonNameGame = () => {
  const { state } = useContext(AppContext);
  const { pokemonNames } = state;

  const availablePokemonNames = useMemo(() => {
    if (!pokemonNames?.length) {
      return null;
    }

    return pokemonNames.filter(({ name }) => {
      let includePokemon = true;
      INVALID_CHARACTERS.forEach((character) => {
        if (name.includes(character)) {
          includePokemon = false;
        }
      });
      return includePokemon;
    });
  }, [pokemonNames]);

  if (!availablePokemonNames) {
    return null;
  }

  return (
    <PageWrapper>
      <FindPokemonNameGameWrapper pokemonNames={availablePokemonNames} />
    </PageWrapper>
  );
};

export default FindPokemonNameGame;
