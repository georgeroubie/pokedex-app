import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import PokedexBottom from '../components/layout/PokedexBottom';
import PokedexTop from '../components/layout/PokedexTop';
import Description from '../components/typography/Description';
import Title from '../components/typography/Title';

const NotFound = () => (
  <PageWrapper>
    <PokedexTop>
      <Title>Oops :(</Title>
    </PokedexTop>
    <PokedexBottom>
      <Description>The page you are looking for does not exist!</Description>
      <Description>
        Click <Link to="/">here</Link> to go to home page.
      </Description>
    </PokedexBottom>
  </PageWrapper>
);

export default NotFound;
