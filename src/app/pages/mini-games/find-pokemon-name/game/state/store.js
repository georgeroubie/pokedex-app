import { useReducer } from 'react';
import { LIVES } from '../constants';
import getRandomPokemon from '../helpers/random-pokemon';
import * as actionTypes from './actions';
import { findPokemonNameReducer } from './reducer';

function useFindPokemonNameState(pokemonNames) {
  const [state, dispatch] = useReducer(findPokemonNameReducer, {
    lives: LIVES,
    score: 0,
    pokemon: {
      name: '',
      image: '',
      nameArray: [],
    },
    pokemonNames: pokemonNames,
    playerFounds: [],
    gameStatus: 'ongoing',
  });

  function setState(type, value) {
    dispatch({ type, value });
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

  function setGameStatus(value) {
    setState(actionTypes.UPDATE_GAME_STATUS, value);
  }

  async function startGame() {
    const pokemon = await getRandomPokemon(pokemonNames);
    setGameStatus('ongoing');
    setLives(LIVES);
    setPokemon({
      name: pokemon.name,
      image: pokemon.sprites.front,
      nameArray: pokemon.name.split(''),
    });
    setPlayerFounds(pokemon.name.split('').map(() => ''));
  }

  return {
    state,
    setScore,
    setLives,
    setPokemon,
    setPlayerFounds,
    setGameStatus,
    startGame,
  };
}

export { useFindPokemonNameState };
