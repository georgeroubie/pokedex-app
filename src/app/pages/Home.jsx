import { useContext, useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import PokedexBottom from '../components/PokedexBottom';
import PokedexTop from '../components/PokedexTop';
import Pokemon from '../components/pokemon';
import PokemonDamage from '../components/pokemon/PokemonDamage';
import Search from '../components/search';
import { AppContext } from '../state/Context';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const { state } = useContext(AppContext);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  return (
    <PageWrapper>
      <PokedexTop>
        {currentPokemon ? (
          <Pokemon currentPokemon={currentPokemon} />
        ) : (
          <Search setCurrentPokemon={setCurrentPokemon} />
        )}
      </PokedexTop>
      <PokedexBottom>{currentPokemon && <PokemonDamage currentPokemon={currentPokemon} />}</PokedexBottom>
    </PageWrapper>
  );
};

export default Home;
