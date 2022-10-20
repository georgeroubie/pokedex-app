import styled from 'styled-components';
import Description from '../typography/Description';
import PageWrapper from './PageWrapper';
import PokedexBottom from './PokedexBottom';
import PokedexTop from './PokedexTop';

const TopWrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const PageLoader = () => {
  return (
    <PageWrapper>
      <PokedexTop>
        <TopWrapper>
          <Description>Loading...</Description>
        </TopWrapper>
      </PokedexTop>
      <PokedexBottom></PokedexBottom>
    </PageWrapper>
  );
};

export default PageLoader;
