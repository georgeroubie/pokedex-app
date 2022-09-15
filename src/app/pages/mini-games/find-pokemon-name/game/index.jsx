import { useContext, useMemo } from 'react';
import PageWrapper from '../../../../components/layout/PageWrapper';
import { AppContext } from '../../../../state/Context';
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
      const invalidCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
      invalidCharacters.forEach((character) => {
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
