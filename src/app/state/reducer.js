import * as actionTypes from './actions';

const appReducer = (state, { type, value }) => {
  switch (type) {
    case actionTypes.UPDATE_THEME_SELECTION:
      return {
        ...state,
        theme: value,
      };
    case actionTypes.UPDATE_LOADING:
      return {
        ...state,
        loading: value,
      };
    case actionTypes.UPDATE_CURRENT_POKEMON:
      return {
        ...state,
        currentPokemon: value,
      };
    case actionTypes.UPDATE_POKEMON_NAMES:
      return {
        ...state,
        pokemonNames: value,
      };
    default:
      return state;
  }
};

export { appReducer };
