import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../state/Context';
import { getPokemon } from './../../helpers/requests';

const Autocomplete = ({ setCurrentPokemon, searchTerm }) => {
  const {
    state: { loading, pokemonNames },
    setLoading,
  } = useContext(AppContext);
  const [filteredPokemonNames, setFilteredPokemonNames] = useState([]);

  const loadPokemon = (url) => {
    setLoading(true);
    getPokemon(url).then(({ data }) => {
      setCurrentPokemon(data);
      setLoading(false);
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
    <div className="autocomplete">
      {filteredPokemonNames.map(({ name, url }) => (
        <button type="button" onClick={() => loadPokemon(url)} key={url} disabled={loading}>
          {name}
        </button>
      ))}
    </div>
  );
};

Autocomplete.propTypes = {
  searchTerm: PropTypes.string,
};

Autocomplete.defaultProps = {
  searchTerm: null,
};

export default Autocomplete;
