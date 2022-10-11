import { useContext, useMemo } from 'react';
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

  const letters = useMemo(() => {
    if (gameStatus === 'ongoing') {
      return parseLettersArray(playerFounds);
    }
    return parseLettersArray(nameArray);
  }, [gameStatus, playerFounds, nameArray]);

  function parseLettersArray(lettersArray) {
    return lettersArray.map((l, index) => ({
      id: l + index,
      value: l ? l : '_',
    }));
  }

  return (
    <>
      <Image src={image} alt="" $blur={gameStatus === 'ongoing'} />
      <LettersWrapper>
        {letters.map(({ id, value }) => (
          <Letter key={id}>{value}</Letter>
        ))}
      </LettersWrapper>
    </>
  );
};

export default BlurredPokemon;
