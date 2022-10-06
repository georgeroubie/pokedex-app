import { useReducer } from 'react';
import { randomNumber } from '../../../../helpers/generators';
import { getPokemonData } from '../../../../helpers/requests';
import { INVALID_CHARACTERS, LIVES } from '../constants';
import * as actionTypes from './actions';
import { findPokemonNameReducer } from './reducer';

const useFindPokemonNameState = (pokemonNames) => {
  const [state, dispatch] = useReducer(findPokemonNameReducer, {
    loading: true,
    lives: LIVES,
    score: 0,
    pokemon: {
      name: '',
      image: '',
      nameArray: [],
    },
    pokemonNames: pokemonNames,
    playerFounds: [],
  });

  function setState(type, value) {
    dispatch({ type, value });
  }

  function setLoading(value) {
    setState(actionTypes.UPDATE_LOADING, value);
  }

  function setScore(value) {
    setState(actionTypes.UPDATE_SCORE, value);
  }

  function setLives(value) {
    setState(actionTypes.UPDATE_LIVES, value);
  }

  function setPokemon(value) {
    setState(actionTypes.UPDATE_POKEMON, value);
  }

  function setPlayerFounds(value) {
    setState(actionTypes.UPDATE_PLAYER_FOUNDS, value);
  }

  async function startGame() {
    setLoading(true);
    const availablePokemons = pokemonNames.filter(({ name }) => {
      let includePokemon = true;
      INVALID_CHARACTERS.forEach((character) => {
        if (name.includes(character)) {
          includePokemon = false;
        }
      });
      return includePokemon;
    });

    const randomIndex = randomNumber(0, availablePokemons.length - 1);
    const pokemon = await getPokemonData(availablePokemons[randomIndex].url);

    setLives(LIVES);
    setPokemon({
      name: pokemon.name,
      image: pokemon.sprites.front,
      nameArray: pokemon.name.split(''),
    });
    setPlayerFounds(pokemon.name.split('').map(() => ''));
    setLoading(false);
  }

  return {
    state,
    setLoading,
    setScore,
    setLives,
    setPokemon,
    setPlayerFounds,
    startGame,
  };
};

export { useFindPokemonNameState };
