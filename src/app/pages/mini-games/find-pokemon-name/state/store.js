import { useReducer } from 'react';
import { LIVES } from '../constants';
import * as actionTypes from './actions';
import { findPokemonNameReducer } from './reducer';

const useFindPokemonNameState = () => {
  const [state, dispatch] = useReducer(findPokemonNameReducer, {
    loading: true,
    lives: LIVES,
    score: 0,
    pokemon: {
      name: '',
      image: '',
      nameArray: [],
    },
    playerFounds: [],
  });

  const setState = (type, value) => {
    dispatch({ type, value });
  };

  const setLoading = (value) => {
    setState(actionTypes.UPDATE_LOADING, value);
  };

  const setScore = (value) => {
    setState(actionTypes.UPDATE_SCORE, value);
  };

  const setLives = (value) => {
    setState(actionTypes.UPDATE_LIVES, value);
  };

  const setPokemon = (value) => {
    setState(actionTypes.UPDATE_POKEMON, value);
  };

  const setPlayerFounds = (value) => {
    setState(actionTypes.UPDATE_PLAYER_FOUNDS, value);
  };

  return {
    state,
    setLoading,
    setScore,
    setLives,
    setPokemon,
    setPlayerFounds,
  };
};

export { useFindPokemonNameState };
