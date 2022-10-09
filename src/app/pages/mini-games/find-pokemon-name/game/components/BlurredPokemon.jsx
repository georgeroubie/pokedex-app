import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { FindPokemonNameContext } from '../state/Context';

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 130px;
  height: auto;
  ${({ $blur }) =>
    $blur &&
    css`
      filter: blur(2px);
    `}
`;

const LettersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.small};
`;

const Letter = styled.span`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
`;

const BlurredPokemon = () => {
  const { state } = useContext(FindPokemonNameContext);
  const { pokemon, playerFounds, gameStatus } = state;
  const { image } = pokemon;

  return (
    <>
      <Image src={image} alt="" $blur={gameStatus === 'ongoing'} />
      <LettersWrapper>
        {playerFounds.map((l, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Letter key={index + l}>{l ? l : '_'}</Letter>
        ))}
      </LettersWrapper>
    </>
  );
};

export default BlurredPokemon;
