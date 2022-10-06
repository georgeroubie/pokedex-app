import PropTypes from 'prop-types';
import { createContext } from 'react';
import { useFindPokemonNameState } from './store';

const FindPokemonNameContext = createContext();

const FindPokemonNameProvider = ({ children }) => (
  <FindPokemonNameContext.Provider value={useFindPokemonNameState()}>{children}</FindPokemonNameContext.Provider>
);

FindPokemonNameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FindPokemonNameProvider, FindPokemonNameContext };
