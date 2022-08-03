import styled from 'styled-components';
import Description from '../typography/Description';
import Title from '../typography/Title';
import PokemonDamage from './PokemonDamage';
import PokemonTypes from './PokemonTypes';

const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  border-radius: 8px;
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
`;

const Image = styled.img``;

const Pokemon = ({ pokemon }) => {
  if (!pokemon) return null;
  const types = pokemon.types.map(({ type }) => type);

  return (
    <>
      <Title>{pokemon.name}</Title>
      <ImagesWrapper>
        <Image src={pokemon.sprites.front_default} alt={`${pokemon.name} front image`} />
        <Image src={pokemon.sprites.back_default} alt={`${pokemon.name} back image`} />
      </ImagesWrapper>
      <Description>Types:</Description>
      <PokemonTypes types={types} />
      <PokemonDamage pokemon={pokemon} />
    </>
  );
};

export default Pokemon;
