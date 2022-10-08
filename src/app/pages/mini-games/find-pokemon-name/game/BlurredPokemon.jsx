import { useContext } from 'react';
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
  const { loading, pokemon, playerFounds, gameStatus } = state;
  const { image } = pokemon;

  if (loading) {
    return null;
  }

  return (
    <Wrapper>
      <Image src={image} alt="" $blur={gameStatus === 'ongoing'} />
      <LettersWrapper>
        {playerFounds.map((l, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Letter key={index + l}>{l ? l : '_'}</Letter>
        ))}
      </LettersWrapper>
      <Status />
    </Wrapper>
  );
};

export default BlurredPokemon;
