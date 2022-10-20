import PageWrapper from '../../components/layout/PageWrapper';
import PokedexBottom from '../../components/layout/PokedexBottom';
import PokedexTop from '../../components/layout/PokedexTop';
import Pokemon from '../../components/pokemon/Pokemon';
import SearchPokemon from '../../components/pokemon/SearchPokemon';

const Home = () => {
  return (
    <PageWrapper>
      <PokedexTop>
        <SearchPokemon />
      </PokedexTop>
      <PokedexBottom>
        <Pokemon />
      </PokedexBottom>
    </PageWrapper>
  );
};

export default Home;
