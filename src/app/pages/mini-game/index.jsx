import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import PokedexBottom from '../../components/layout/PokedexBottom';
import PokedexTop from '../../components/layout/PokedexTop';
import Description from '../../components/typography/Description';
import Subtitle from '../../components/typography/Subtitle';

const TopWrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const MiniGame = () => (
  <PageWrapper>
    <PokedexTop>
      <TopWrapper>
        <Subtitle>Mini Game</Subtitle>
      </TopWrapper>
    </PokedexTop>
    <PokedexBottom>
      <Description>Coming soon!</Description>
    </PokedexBottom>
  </PageWrapper>
);

export default MiniGame;
