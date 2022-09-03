import { useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import Description from '../typography/Description';
import Subtitle from '../typography/Subtitle';
import _PokemonName from './PokemonName';

const Wrapper = styled.div``;

const PokemonName = styled(_PokemonName)`
  padding-top: ${({ theme: { spacing } }) => spacing.small};
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
    const name = pokemon.evolves_from_species?.name;
    if (name) {
      return {
        name,
        url: getPokemonUrl(name),
      };
    }
  }, [getPokemonUrl, pokemon.evolves_from_species?.name]);

  if (!pokemon) return null;

  if (!pokemon.evolutions.length) {
    return (
      <Wrapper>
        <Subtitle>Evolutions</Subtitle>
        <Description>No known evolution</Description>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Subtitle>Evolutions</Subtitle>
      {evolvesFrom && (
        <Description>
          Evolves from:
          <PokemonName pokemons={[evolvesFrom]} />
        </Description>
      )}
      {Boolean(evolvesTo?.length) && (
        <Description>
          Evolves to:
          <PokemonName pokemons={evolvesTo} />
        </Description>
      )}
    </Wrapper>
  );
};

export default PokemonEvolutions;
