import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from './../../state/Context';
import Autocomplete from './Autocomplete';

const Search = ({ setCurrentPokemon }) => {
  const {
    state: { loading },
  } = useContext(AppContext);
  const [pokemonName, setPokemonName] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (!loading) inputRef.current.focus();
  }, [loading, inputRef]);

  const handleChange = ({ target }) => {
    setPokemonName(target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Pokemon name"
        value={pokemonName}
        onChange={handleChange}
        disabled={loading}
        ref={inputRef}
      />
      <Autocomplete searchTerm={pokemonName} setCurrentPokemon={setCurrentPokemon} />
    </div>
  );
};

export default Search;
