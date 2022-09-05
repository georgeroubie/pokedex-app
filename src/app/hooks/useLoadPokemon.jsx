import { useContext } from 'react';
import { getEvolutionChainData, getPokemonData, getPokemonSpeciesData } from '../helpers/requests';
import { AppContext } from '../state/Context';

function useLoadPokemon() {
  const { setPokemon, setLoading } = useContext(AppContext);

  async function loadPokemon(url, callback) {
    setLoading(true);

    const pokemon = await getPokemonData(url);
    const speciesData = await getPokemonSpeciesData(pokemon.species.url);
    const evolutionChainData = await getEvolutionChainData(speciesData.evolutionChainUrl);

    setPokemon({
      ...pokemon,
      ...speciesData,
      ...evolutionChainData,
    });
    setLoading(false);
    callback?.();
  }

  return loadPokemon;
}

export default useLoadPokemon;
