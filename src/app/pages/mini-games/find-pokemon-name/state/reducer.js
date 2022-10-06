import * as actionTypes from './actions';

const findPokemonNameReducer = (state, { type, value }) => {
  switch (type) {
    case actionTypes.UPDATE_LOADING:
      return {
        ...state,
        loading: value,
      };
    case actionTypes.UPDATE_LIVES:
      return {
        ...state,
        lives: value,
      };
    case actionTypes.UPDATE_POKEMON:
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          ...value,
        },
      };
    case actionTypes.UPDATE_PLAYER_FOUNDS:
      return {
        ...state,
        playerFounds: value,
      };
    default:
      return state;
  }
};

export { findPokemonNameReducer };
