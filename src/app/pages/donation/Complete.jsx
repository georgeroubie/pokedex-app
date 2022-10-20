import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import PokedexBottom from '../../components/layout/PokedexBottom';
import PokedexTop from '../../components/layout/PokedexTop';
import Description from '../../components/typography/Description';
import Title from '../../components/typography/Title';

const Wrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const CompleteDonation = () => {
  return (
    <PageWrapper>
      <PokedexTop>
        <Wrapper>
          <Title>You are awesome</Title>
        </Wrapper>
      </PokedexTop>
      <PokedexBottom>
        <Description>
          Your donation is very prized and will forever be held in high regard in my memory. For this, I thank you and
          greatly appreciate your support. Also I respect and admire your decision to donate so selflessly.
        </Description>
      </PokedexBottom>
    </PageWrapper>
  );
};

export default CompleteDonation;
