import { useEffect, useReducer } from 'react';
import { getAllPokemonRecordsData } from '../helpers/requests';
import { getCurrentTheme, saveThemeSelection } from '../theme/themes/helpers';
import * as actionTypes from './actions';
import { appReducer } from './reducer';

const useAppState = () => {
  const [state, dispatch] = useReducer(appReducer, {
    theme: getCurrentTheme(),
    loading: true,
    pokemonNames: [],
    pokemon: null,
  });

  const setState = (type, value) => {
    dispatch({ type, value });
  };

  const setTheme = (value) => {
    saveThemeSelection(value);
    setState(actionTypes.UPDATE_THEME_SELECTION, value);
  };

  const setPokemon = (value) => {
    setState(actionTypes.UPDATE_POKEMON, value);
  };

  const setLoading = (value) => {
    setState(actionTypes.UPDATE_LOADING, value);
  };

  const setPokemonNames = (value) => {
    setState(actionTypes.UPDATE_POKEMON_NAMES, value);
  };

  useEffect(() => {
    getAllPokemonRecordsData().then((data) => {
      setPokemonNames(data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    state,
    setTheme,
    setLoading,
    setPokemon,
  };
};

export { useAppState };
