import { useContext } from 'react';
import styled from 'styled-components';
import BlurredPokemon from '../components/BlurredPokemon';
import Status from '../components/Status';
import { FindPokemonNameContext } from '../state/Context';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme: { spacing } }) => spacing.small};
  min-height: 100%;
  padding: ${({ theme: { spacing } }) => `0 ${spacing.normal} ${spacing.normal}`};
`;

const InfoScreen = () => {
  const { state } = useContext(FindPokemonNameContext);
  const { pokemon } = state;

  if (!pokemon?.name) {
    return null;
  }

  return (
    <Wrapper>
      <BlurredPokemon />
      <Status />
    </Wrapper>
  );
};

export default InfoScreen;
