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

  const evolvesFrom = useMemo(() => pokemon.evolves_from_species?.name, [pokemon.evolves_from_species?.name]);

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

  return (
    <Wrapper>
      <Subtitle>Evolutions</Subtitle>
      {evolvesFrom && <Description>Evolves from: {evolvesFrom}</Description>}
      {Boolean(evolvesTo?.length) && (
        <Description>
          Evolves to:{' '}
          {evolvesTo.map((evolution) => (
            <span key={evolution.name}>{evolution.name}</span>
          ))}
        </Description>
      )}
    </Wrapper>
  );
};

export default PokemonEvolutions;
