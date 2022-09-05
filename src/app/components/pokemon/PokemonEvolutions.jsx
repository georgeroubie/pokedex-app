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

  const getPokemonUrl = useCallback((name) => pokemonNames.find((p) => p.name === name).url, [pokemonNames]);

  const evolvesTo = useMemo(
    () =>
      pokemon.evolutions.reduce((acc, evolution) => {
        if (evolution.pokemon.name === pokemon.name) {
          const allEvolutions = evolution.evolvesTo.map((e) => ({
            ...e,
            url: getPokemonUrl(e.name),
          }));
          return [...acc, ...allEvolutions];
        }
        return acc;
      }, []),
    [pokemon.evolutions, pokemon.name, getPokemonUrl],
  );

  const evolvesFrom = useMemo(() => {
    const name = pokemon.evolvesFromSpecies;
    if (name) {
      return {
        name,
        url: getPokemonUrl(name),
      };
    }
  }, [getPokemonUrl, pokemon.evolvesFromSpecies]);

  if (!pokemon) return null;

  if (!pokemon.evolutions.length) {
    return (
      <Wrapper>
        <Subtitle>Evolutions</Subtitle>
        <Description>No known evolutions</Description>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Subtitle>Evolutions</Subtitle>
      {evolvesFrom && (
        <>
          <Description>Evolves from:</Description>
          <PokemonNames pokemons={[evolvesFrom]} />
        </>
      )}
      {Boolean(evolvesTo?.length) && (
        <>
          <Description>Evolves to:</Description>
          <PokemonNames pokemons={evolvesTo} />
        </>
      )}
    </Wrapper>
  );
};

export default PokemonEvolutions;
