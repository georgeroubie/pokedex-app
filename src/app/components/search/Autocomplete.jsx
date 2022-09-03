import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import _PokemonName from '../pokemon/PokemonName';

const PokemonName = styled(_PokemonName)`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const Autocomplete = ({ setPokemonName, searchTerm }) => {
  const {
    state: { pokemonNames },
  } = useContext(AppContext);
  const [filteredPokemonNames, setFilteredPokemonNames] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredPokemonNames(
        pokemonNames.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())),
      );
    } else {
      setFilteredPokemonNames([]);
    }
  }, [searchTerm, pokemonNames]);

  return <PokemonName pokemons={filteredPokemonNames} onClick={() => setPokemonName('')} />;
};

Autocomplete.propTypes = {
  searchTerm: PropTypes.string,
  setPokemonName: PropTypes.func.isRequired,
};

Autocomplete.defaultProps = {
  searchTerm: null,
};

export default Autocomplete;
