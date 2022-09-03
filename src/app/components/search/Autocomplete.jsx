import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import PokemonName from '../pokemon/PokemonName';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme: { spacing } }) => spacing.xsmall};
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

  return (
    <Wrapper>
      {filteredPokemonNames.map(({ name, url }) => (
        <PokemonName key={url} url={url} onClick={() => setPokemonName('')}>
          {name}
        </PokemonName>
      ))}
    </Wrapper>
  );
};

Autocomplete.propTypes = {
  searchTerm: PropTypes.string,
  setPokemonName: PropTypes.func.isRequired,
};

Autocomplete.defaultProps = {
  searchTerm: null,
};

export default Autocomplete;
