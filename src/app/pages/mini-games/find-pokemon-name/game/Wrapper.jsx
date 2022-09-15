import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import PokedexBottom from '../../../../components/layout/PokedexBottom';
import PokedexTop from '../../../../components/layout/PokedexTop';
import { randomNumber } from '../../../../helpers/generators';
import { getPokemonData } from '../../../../helpers/requests';
import { LIVES } from '../constants';
import BlurredPokemon from './BlurredPokemon';
import SelectLetter from './SelectLetter';

const FindPokemonNameGameWrapper = ({ pokemonNames }) => {
  const [activeGame, setActiveGame] = useState();

  const startGame = useCallback(async () => {
    const randomIndex = randomNumber(0, pokemonNames.length);
    const randomPokemon = pokemonNames[randomIndex];
    const pokemon = await getPokemonData(randomPokemon.url);

    setActiveGame(() => ({
      lives: LIVES,
      name: pokemon.name,
      image: pokemon.sprites.front,
      nameArray: pokemon.name.split(''),
      foundNameArray: pokemon.name.split('').map(() => ''),
    }));
  }, [pokemonNames]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  if (!activeGame) {
    return null;
  }

  return (
    <>
      <PokedexTop>
        <BlurredPokemon game={activeGame} />
      </PokedexTop>
      <PokedexBottom>
        <SelectLetter game={activeGame} setGame={setActiveGame} />
      </PokedexBottom>
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
