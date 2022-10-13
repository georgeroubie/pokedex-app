import { useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import Description from '../typography/Description';
import Subtitle from '../typography/Subtitle';
import _PokemonNames from './PokemonNames';

const Wrapper = styled.div``;

const PokemonNames = styled(_PokemonNames)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
`;

const PokemonEvolutions = () => {
  const { state } = useContext(AppContext);
  const { pokemon, pokemonNames } = state;

  const getPokemonUrl = useCallback(
    (name) => {
      if (name) {
        const fixedPokemon = pokemonNames.find((p) => p.name === name);
        if (fixedPokemon && fixedPokemon?.url) {
          return fixedPokemon.url;
        }

        const relevantPokemon = pokemonNames.find((p) => p.name.includes(name));
        if (relevantPokemon && relevantPokemon?.url) {
          return relevantPokemon.url;
        }
      }
    },
    [pokemonNames],
  );

  const evolvesTo = useMemo(
    () =>
      pokemon?.evolutions?.reduce((acc, evolution) => {
        if (evolution.pokemon.name === pokemon.name) {
          const allEvolutions = evolution.evolvesTo.reduce((allEvolutionsAcc, e) => {
            const url = getPokemonUrl(e.name);
            if (url) {
              return [
                ...allEvolutionsAcc,
                {
                  ...e,
                  url,
                },
              ];
            }
            return allEvolutionsAcc;
          }, []);
          return [...acc, ...allEvolutions];
        }
        return acc;
      }, []),
    [pokemon.evolutions, pokemon.name, getPokemonUrl],
  );

  const evolvesFrom = useMemo(() => {
    const name = pokemon.evolvesFromSpecies;
    const url = getPokemonUrl(name);
    if (url) {
      return {
        name,
        url,
      };
    }
  }, [getPokemonUrl, pokemon.evolvesFromSpecies]);

  if (!pokemon) return null;

  if (!evolvesFrom && !evolvesTo?.length) {
    return null;
  }

  return (
    <Wrapper>
      <Subtitle>Evolutions</Subtitle>
      {Boolean(evolvesTo?.length) && (
        <>
          <Description>Evolves to:</Description>
          <PokemonNames pokemons={evolvesTo} />
        </>
      )}
      {evolvesFrom && (
        <>
          <Description>Evolves from:</Description>
          <PokemonNames pokemons={[evolvesFrom]} />
        </>
      )}
    </Wrapper>
  );
};

export default PokemonEvolutions;
