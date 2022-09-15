import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import PokedexBottom from '../../../../components/layout/PokedexBottom';
import PokedexTop from '../../../../components/layout/PokedexTop';
import { randomNumber } from '../../../../helpers/generators';
import { getPokemonData } from '../../../../helpers/requests';

const FindPokemonNameGameWrapper = ({ pokemonNames }) => {
  const [activePokemon, setActivePokemon] = useState(null);

  const findPokemon = useCallback(async () => {
    const randomIndex = randomNumber(0, pokemonNames.length);
    const randomPokemon = pokemonNames[randomIndex];
    const pokemon = await getPokemonData(randomPokemon.url);
    setActivePokemon(pokemon);
  }, [pokemonNames]);

  useEffect(() => {
    findPokemon();
  }, [findPokemon]);

  console.log(activePokemon);

  return (
    <>
      <PokedexTop>dfgfgd</PokedexTop>
      <PokedexBottom>dfdfgdf</PokedexBottom>
    </>
  );
};

FindPokemonNameGameWrapper.propTypes = {
  pokemonNames: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FindPokemonNameGameWrapper;
