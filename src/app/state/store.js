import { useEffect, useReducer } from 'react';
import { getAllPokemonNames } from '../helpers/requests';
import { getCurrentTheme, saveThemeSelection } from '../theme/themes/helpers';
import * as actionTypes from './actions';
import { appReducer } from './reducer';

const useAppState = () => {
  const [state, dispatch] = useReducer(appReducer, {
    theme: getCurrentTheme(),
    loading: true,
    pokemonNames: [],
  });

  const setState = (type, value) => {
    dispatch({ type, value });
  };

  const setTheme = (value) => {
    saveThemeSelection(value);
    setState(actionTypes.UPDATE_THEME_SELECTION, value);
  };

  const setLoading = (value) => {
    setState(actionTypes.UPDATE_LOADING, value);
  };

  const setPokemonNames = (value) => {
    setState(actionTypes.UPDATE_POKEMON_NAMES, value);
  };

  useEffect(() => {
    getAllPokemonNames().then(({ data: { results } }) => {
      setPokemonNames(results);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    state,
    setTheme,
    setLoading,
  };
};

export { useAppState };
