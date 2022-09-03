import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import Subtitle from '../typography/Subtitle';
import Title from '../typography/Title';
import PokemonDamage from './PokemonDamage';
import PokemonEvolutions from './PokemonEvolutions';
import PokemonTypes from './PokemonTypes';

const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};
  border-radius: ${({ theme: { border } }) => border.radius};
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
`;

const Image = styled.img``;

const Pokemon = () => {
  const { state } = useContext(AppContext);
  const { pokemon } = state;

  if (!pokemon) return null;

  const types = pokemon.types.map(({ type }) => type);
  const { sprites } = pokemon;

  return (
    <>
      <Title>{pokemon.name}</Title>
      {(sprites.front_default || sprites.back_default) && (
        <ImagesWrapper>
          {sprites.front_default && <Image src={sprites.front_default} alt={`${pokemon.name} front image`} />}
          {sprites.back_default && <Image src={sprites.back_default} alt={`${pokemon.name} back image`} />}
        </ImagesWrapper>
      )}
      <PokemonEvolutions />
      <Subtitle>Types</Subtitle>
      <PokemonTypes types={types} />
      <PokemonDamage pokemon={pokemon} />
    </>
  );
};

export default Pokemon;
