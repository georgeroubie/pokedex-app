import PropTypes from 'prop-types';
import { useMemo } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
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

const BlurredPokemon = ({ game }) => {
  console.log(game);
  const { image, nameArray, foundNameArray } = game;

  const pokemonWasFound = useMemo(() => {
    let wasFound = true;
    foundNameArray.forEach((letter, index) => {
      if (letter !== nameArray[index]) {
        wasFound = false;
      }
    });

    return wasFound;
  }, [nameArray, foundNameArray]);

  return (
    <Wrapper>
      <Image src={image} alt="" $blur={!pokemonWasFound} />
      <LettersWrapper>
        {foundNameArray.map((l) => (
          <Letter key={Date.now() + Math.random()}>{l ? l : '_'}</Letter>
        ))}
      </LettersWrapper>
    </Wrapper>
  );
};

BlurredPokemon.propTypes = {
  game: PropTypes.shape({
    lives: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nameArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    foundNameArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default BlurredPokemon;
