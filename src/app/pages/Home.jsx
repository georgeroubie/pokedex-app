import { useContext, useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import PokedexBottom from '../components/PokedexBottom';
import PokedexTop from '../components/PokedexTop';
import Pokemon from '../components/Pokemon';
import PokemonDamage from '../components/PokemonDamage';
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
      <PokedexBottom>
        {pokemon && (
          <>
            <Pokemon pokemon={pokemon} />
            <PokemonDamage pokemon={pokemon} />
          </>
        )}
      </PokedexBottom>
    </PageWrapper>
  );
};

export default Home;
