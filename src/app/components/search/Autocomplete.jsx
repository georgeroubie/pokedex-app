import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import { getPokemon, getPokemonSpecies } from './../../helpers/requests';

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

const Autocomplete = ({ setPokemon, setPokemonName, searchTerm }) => {
  const {
    state: { loading, pokemonNames },
    setLoading,
  } = useContext(AppContext);
  const [filteredPokemonNames, setFilteredPokemonNames] = useState([]);

  const loadPokemon = (url) => {
    setLoading(true);
    getPokemon(url).then(({ data: pokemon }) => {
      getPokemonSpecies(pokemon.id).then(({ data: species }) => {
        setPokemon({
          ...pokemon,
          ...species,
        });
        setPokemonName('');
        setLoading(false);
      });
    });
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
        <Name type="button" onClick={() => loadPokemon(url)} key={url} disabled={loading}>
          {name}
        </Name>
      ))}
    </Wrapper>
  );
};

Autocomplete.propTypes = {
  searchTerm: PropTypes.string,
  setPokemon: PropTypes.func.isRequired,
  setPokemonName: PropTypes.func.isRequired,
};

Autocomplete.defaultProps = {
  searchTerm: null,
};

export default Autocomplete;
