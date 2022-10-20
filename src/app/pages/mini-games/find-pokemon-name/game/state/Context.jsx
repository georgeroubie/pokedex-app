import PropTypes from 'prop-types';
import { createContext } from 'react';
import { useFindPokemonNameState } from './store';

const FindPokemonNameContext = createContext();

const FindPokemonNameProvider = ({ pokemonNames, children }) => {
  return (
    <FindPokemonNameContext.Provider value={useFindPokemonNameState(pokemonNames)}>
      {children}
    </FindPokemonNameContext.Provider>
  );
};

FindPokemonNameProvider.propTypes = {
  pokemonNames: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.node.isRequired,
};

export { FindPokemonNameProvider, FindPokemonNameContext };
