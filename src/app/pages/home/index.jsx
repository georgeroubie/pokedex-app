import PageWrapper from '../../components/layout/PageWrapper';
import PokedexBottom from '../../components/layout/PokedexBottom';
import PokedexTop from '../../components/layout/PokedexTop';
import Pokemon from '../../components/pokemon/Pokemon';
import Search from '../../components/search';

const Home = () => (
  <PageWrapper>
    <PokedexTop>
      <Search />
    </PokedexTop>
    <PokedexBottom>
      <Pokemon />
    </PokedexBottom>
  </PageWrapper>
);

export default Home;
