import { useContext } from 'react';
import { getEvolutions } from '../helpers/data';
import { getEvolutionChain, getPokemon, getPokemonSpecies } from '../helpers/requests';
import { AppContext } from '../state/Context';

function useLoadPokemon() {
  const { setPokemon, setLoading } = useContext(AppContext);

  async function loadPokemon(url, callback) {
    setLoading(true);

    const { data: pokemon } = await getPokemon(url);
    const pokemonData = {
      id: pokemon.id,
      name: pokemon.name,
      species: pokemon.species,
      types: pokemon.types,
      sprites: pokemon.sprites,
    };

    const { data: species } = await getPokemonSpecies(pokemonData.species.url);
    const speciesData = {
      evolutionChainUrl: species.evolution_chain.url,
      evolvesFromSpecies: species.evolves_from_species?.name,
    };

    const {
      data: { chain },
    } = await getEvolutionChain(speciesData.evolutionChainUrl);
    const chainData = {
      evolutions: getEvolutions(chain),
    };

    setPokemon({
      ...pokemonData,
      ...speciesData,
      ...chainData,
    });
    setLoading(false);
    callback?.();
  }

  return loadPokemon;
}

export default useLoadPokemon;
