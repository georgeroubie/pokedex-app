import { useContext, useState } from 'react';
import { AppContext } from './../../state/Context';
import Autocomplete from './Autocomplete';

const Search = ({ setPokemon }) => {
  const {
    state: { loading },
  } = useContext(AppContext);
  const [pokemonName, setPokemonName] = useState('');

  const handleChange = ({ target }) => {
    setPokemonName(target.value);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Pokemon name" value={pokemonName} onChange={handleChange} disabled={loading} />
      <Autocomplete searchTerm={pokemonName} setPokemon={setPokemon} setPokemonName={setPokemonName} />
    </div>
  );
};

export default Search;
