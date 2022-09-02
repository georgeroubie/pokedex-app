import { useContext, useMemo } from 'react';
import styled from 'styled-components';
import useLoadPokemon from '../../hooks/useLoadPokemon';
import { AppContext } from '../../state/Context';
import Description from '../typography/Description';
import Subtitle from '../typography/Subtitle';

const Wrapper = styled.div``;

const Button = styled.button``;

const PokemonEvolutions = () => {
  const { state } = useContext(AppContext);
  const { pokemon, pokemonNames } = state;
  const loadPokemon = useLoadPokemon();

  function handlePokemonNameClick(name) {
    const evolutionPokemon = pokemonNames.find((p) => p.name === name);
    loadPokemon(evolutionPokemon.url);
  }

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
      {evolvesFrom && (
        <Description>
          Evolves from: <Button onClick={() => handlePokemonNameClick(evolvesFrom)}>{evolvesFrom}</Button>
        </Description>
      )}
      {Boolean(evolvesTo?.length) && (
        <Description>
          Evolves to:{' '}
          {evolvesTo.map((evolution) => (
            <Button key={evolution.name} onClick={() => handlePokemonNameClick(evolution.name)}>
              {evolution.name}
            </Button>
          ))}
        </Description>
      )}
    </Wrapper>
  );
};

export default PokemonEvolutions;
