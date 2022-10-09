import styled from 'styled-components';
import BlurredPokemon from '../components/BlurredPokemon';
import Status from '../components/Status';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  min-height: 100%;
  padding: ${({ theme: { spacing } }) => `0 ${spacing.normal} ${spacing.normal}`};
`;

const InfoScreen = () => (
  <Wrapper>
    <BlurredPokemon />
    <Status />
  </Wrapper>
);

export default InfoScreen;
