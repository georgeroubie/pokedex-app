import { useContext, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { FindPokemonNameContext } from '../state/Context';
import Status from './Status';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  min-height: 100%;
  padding: ${({ theme: { spacing } }) => `0 ${spacing.normal} ${spacing.normal}`};
`;

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
  const { pokemon, lives, playerFounds } = state;
  const { image, nameArray } = pokemon;

  const pokemonWasFound = useMemo(() => {
    let wasFound = true;
    playerFounds.forEach((letter, index) => {
      if (letter !== nameArray[index]) {
        wasFound = false;
      }
    });

    return wasFound;
  }, [nameArray, playerFounds]);

  return (
    <Wrapper>
      <Image src={image} alt="" $blur={!pokemonWasFound} />
      {pokemonWasFound ? (
        'YOU WIN'
      ) : (
        <>
          <LettersWrapper>
            {playerFounds.map((l, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Letter key={index + l}>{l ? l : '_'}</Letter>
            ))}
          </LettersWrapper>
          <Status lives={lives} />
        </>
      )}
    </Wrapper>
  );
};

export default BlurredPokemon;
