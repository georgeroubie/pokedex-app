import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/Context';
import _PokemonNames from './PokemonNames';

const Wrapper = styled.div``;

const Input = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0;
  outline: none;
  background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  color: ${({ theme: { colors } }) => colors.textPrimary};
  padding: ${({ theme: { spacing } }) => `${spacing.small} ${spacing.normal}`};
  border-bottom: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};
`;

const PokemonNames = styled(_PokemonNames)`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const SearchPokemon = () => {
  const {
    state: { loading, pokemonNames },
  } = useContext(AppContext);
  const [pokemonName, setPokemonName] = useState('');
  const [filteredPokemonNames, setFilteredPokemonNames] = useState([]);

  useEffect(() => {
    if (pokemonName) {
      const filteredPokemons = pokemonNames.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()),
      );
      setFilteredPokemonNames(filteredPokemons);
    } else {
      setFilteredPokemonNames([]);
    }
  }, [pokemonName, pokemonNames]);

  function handleChange({ target }) {
    setPokemonName(target.value);
  }

  return (
    <Wrapper>
      <Input
        inputMode="text"
        placeholder="Pokemon name"
        value={pokemonName}
        onChange={handleChange}
        disabled={loading}
      />
      <PokemonNames pokemons={filteredPokemonNames} onClick={() => setPokemonName('')} />
    </Wrapper>
  );
};

export default SearchPokemon;
