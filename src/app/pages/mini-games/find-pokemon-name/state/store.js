import { useReducer } from 'react';
import { LIVES } from '../constants';
import * as actionTypes from './actions';
import { findPokemonNameReducer } from './reducer';

const useFindPokemonNameState = () => {
  const [state, dispatch] = useReducer(findPokemonNameReducer, {
    loading: false,
    lives: LIVES,
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
    setLives,
    setLoading,
    setPokemon,
    setPlayerFounds,
  };
};

export { useFindPokemonNameState };
