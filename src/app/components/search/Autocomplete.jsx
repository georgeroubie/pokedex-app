import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useLoadPokemon from '../../hooks/useLoadPokemon';
import { AppContext } from '../../state/Context';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme: { spacing } }) => spacing.xsmall};
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const Name = styled.button`
  border-radius: 0;
  border: 0;
  padding: ${({ theme: { spacing } }) => spacing.xsmall};
  background-color: ${({ theme: { colors } }) => colors.textPrimary};
  color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  width: max-content;
`;

const Autocomplete = ({ setPokemonName, searchTerm }) => {
  const {
    state: { loading, pokemonNames },
  } = useContext(AppContext);
  const [filteredPokemonNames, setFilteredPokemonNames] = useState([]);
  const loadPokemon = useLoadPokemon();

  const handlePokemonNameClick = (url) => {
    loadPokemon(url, () => setPokemonName(''));
  };

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
        <Name type="button" onClick={() => handlePokemonNameClick(url)} key={url} disabled={loading}>
          {name}
        </Name>
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
