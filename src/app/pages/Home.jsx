import { useContext, useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import PokedexBottom from '../components/layout/PokedexBottom';
import PokedexTop from '../components/layout/PokedexTop';
import Pokemon from '../components/pokemon/Pokemon';
import Search from '../components/search';
import { AppContext } from '../state/Context';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const { state } = useContext(AppContext);
  const [pokemon, setPokemon] = useState(null);

  return (
    <PageWrapper>
      <PokedexTop>
        <Search setPokemon={setPokemon} />
      </PokedexTop>
      <PokedexBottom>{pokemon && <Pokemon pokemon={pokemon} />}</PokedexBottom>
    </PageWrapper>
  );
};

export default Home;
