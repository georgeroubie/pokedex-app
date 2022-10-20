import { useEffect, useReducer } from 'react';
import { getAllPokemonRecordsData } from '../helpers/requests';
import { getCurrentTheme, saveThemeSelection } from '../theme/themes/helpers';
import * as actionTypes from './actions';
import { appReducer } from './reducer';

function useAppState() {
  const [state, dispatch] = useReducer(appReducer, {
    theme: getCurrentTheme(),
    loading: true,
    pokemonNames: [],
    pokemon: null,
  });

  function setState(type, value) {
    dispatch({ type, value });
  }

  function setTheme(value) {
    saveThemeSelection(value);
    setState(actionTypes.UPDATE_THEME_SELECTION, value);
  }

  function setPokemon(value) {
    setState(actionTypes.UPDATE_POKEMON, value);
  }

  function setLoading(value) {
    setState(actionTypes.UPDATE_LOADING, value);
  }

  function setPokemonNames(value) {
    setState(actionTypes.UPDATE_POKEMON_NAMES, value);
  }

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
}

export { useAppState };
