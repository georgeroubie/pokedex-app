import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import PokedexBottom from '../../components/layout/PokedexBottom';
import PokedexTop from '../../components/layout/PokedexTop';
import Description from '../../components/typography/Description';
import Title from '../../components/typography/Title';

const Wrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const CancelDonation = () => {
  return (
    <PageWrapper>
      <PokedexTop>
        <Wrapper>
          <Title>No worries</Title>
        </Wrapper>
      </PokedexTop>
      <PokedexBottom>
        <Description>
          You changed your mind for the donation and that's fine. <br />
          Those who can’t change their minds can’t change anything.
        </Description>
      </PokedexBottom>
    </PageWrapper>
  );
};

export default CancelDonation;
