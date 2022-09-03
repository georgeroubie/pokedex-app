import { useContext } from 'react';
import { getEvolutions } from '../helpers/data';
import { getEvolutionChain, getPokemon, getPokemonSpecies } from '../helpers/requests';
import { AppContext } from '../state/Context';

function useLoadPokemon() {
  const { setPokemon, setLoading } = useContext(AppContext);

  async function loadPokemon(url, callback) {
    setLoading(true);

    const { data: pokemon } = await getPokemon(url);
    const { data: species } = await getPokemonSpecies(pokemon.species.url);
    const {
      data: { chain },
    } = await getEvolutionChain(species.evolution_chain.url);

    setPokemon({
      ...pokemon,
      ...species,
      evolutions: getEvolutions(chain),
    });
    setLoading(false);
    callback?.();
  }

  return loadPokemon;
}

export default useLoadPokemon;
