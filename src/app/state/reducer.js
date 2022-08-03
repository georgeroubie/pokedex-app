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
    case actionTypes.UPDATE_POKEMON_NAMES:
      return {
        ...state,
        pokemonNames: value,
      };
    case actionTypes.UPDATE_POKEMON:
      return {
        ...state,
        pokemon: value,
      };
    default:
      return state;
  }
};

export { appReducer };
