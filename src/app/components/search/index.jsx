import { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from './../../state/Context';
import Autocomplete from './Autocomplete';

const Input = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0;
  outline: none;
  background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  color: ${({ theme: { colors } }) => colors.textPrimary};
  padding: 14px;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
`;

const Search = () => {
  const {
    state: { loading },
    setPokemon,
  } = useContext(AppContext);
  const [pokemonName, setPokemonName] = useState('');

  const handleChange = ({ target }) => {
    setPokemonName(target.value);
  };

  return (
    <div className="search">
      <Input type="text" placeholder="Pokemon name" value={pokemonName} onChange={handleChange} disabled={loading} />
      <Autocomplete searchTerm={pokemonName} setPokemon={setPokemon} setPokemonName={setPokemonName} />
    </div>
  );
};

export default Search;
