import { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import Description from '../typography/Description';
import Subtitle from '../typography/Subtitle';

const Wrapper = styled.div``;

const PokemonEvolutions = () => {
  const { state } = useContext(AppContext);
  const { pokemon, pokemonNames } = state;

  console.log(pokemonNames);

  // eslint-disable-next-line no-unused-vars
  const evolvesTo = useMemo(
    () =>
      pokemon.evolutions.reduce((acc, evolution) => {
        if (evolution.pokemon.name === pokemon.name) {
          return [...acc, ...evolution.evolvesTo];
        }
        return acc;
      }, []),
    [pokemon.evolutions, pokemon.name],
  );

  if (!pokemon) return null;

  if (!pokemon.evolutions.length) {
    return (
      <Wrapper>
        <Subtitle>Evolutions</Subtitle>
        <Description>No known evolution</Description>
      </Wrapper>
    );
  }

  console.log('Evolves to', evolvesTo);

  console.log('Evolves from', pokemon.evolves_from_species?.name);

  return (
    <Wrapper>
      <Subtitle>Evolutions</Subtitle>
      <Description>Some evolutions</Description>
    </Wrapper>
  );
};

export default PokemonEvolutions;
