import { useContext } from 'react';
import { getEvolutions } from '../helpers/data';
import { getEvolutionChain, getPokemon, getPokemonSpecies } from '../helpers/requests';
import { AppContext } from '../state/Context';

function useLoadPokemon() {
  const { setPokemon, setLoading } = useContext(AppContext);

  function loadPokemon(url, callback) {
    setLoading(true);
    getPokemon(url).then(({ data: pokemon }) => {
      getPokemonSpecies(pokemon.species.url).then(({ data: species }) => {
        getEvolutionChain(species.evolution_chain.url).then(({ data: { chain } }) => {
          setPokemon({
            ...pokemon,
            ...species,
            evolutions: getEvolutions(chain),
          });
          setLoading(false);
          callback?.();
        });
      });
    });
  }

  return loadPokemon;
}

export default useLoadPokemon;
