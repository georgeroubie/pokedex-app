import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { FindPokemonNameContext } from '../state/Context';

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 130px;
  height: 130px;
  object-fit: cover;
  pointer-events: none;
  ${({ $blur }) =>
    $blur &&
    css`
      filter: blur(2.5px);
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
  const { image, nameArray } = pokemon;

  return (
    <>
      <Image src={image} alt="" $blur={gameStatus === 'ongoing'} />
      {gameStatus === 'ongoing' ? (
        <LettersWrapper>
          {playerFounds.map((l, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Letter key={index + l}>{l ? l : '_'}</Letter>
          ))}
        </LettersWrapper>
      ) : (
        <LettersWrapper>
          {nameArray.map((l, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Letter key={index + l}>{l ? l : '_'}</Letter>
          ))}
        </LettersWrapper>
      )}
    </>
  );
};

export default BlurredPokemon;
