function evolvesTo(evolves, chain) {
  if (chain.evolves_to?.length > 0) {
    evolves.push({
      pokemon: {
        name: chain.species.name,
        speciesUrl: chain.species.url,
      },
      evolvesTo: chain.evolves_to.map((e) => ({
        name: e.species.name,
        speciesUrl: e.species.url,
        minLevel: e.evolution_details[0]?.min_level,
        triggerName: e.evolution_details[0]?.trigger.name,
        triggerUrl: e.evolution_details[0]?.trigger.url,
        itemName: e.evolution_details[0]?.item?.name,
        itemUrl: e.evolution_details[0]?.item?.url,
      })),
    });

    chain.evolves_to.map((evolution) => evolvesTo(evolves, evolution));
  }

  return evolves;
}

function transformPokemonRecordsData(data) {
  return data.results;
}

function transformPokemonData(data) {
  return {
    id: data.id,
    name: data.name,
    species: data.species,
    types: data.types,
    sprites: {
      front_default: data.sprites?.front_default,
      back_default: data.sprites?.back_default,
    },
  };
}

function transformPokemonSpeciesData(data) {
  return {
    evolutionChainUrl: data.evolution_chain.url,
    evolvesFromSpecies: data.evolves_from_species?.name,
  };
}

function transformPokemonChainData(data) {
  return {
    evolutions: evolvesTo([], data.chain),
  };
}

function transformPokemonTypesData(data) {
  return {
    damage_relations: data.damage_relations,
  };
}

export {
  transformPokemonRecordsData,
  transformPokemonChainData,
  transformPokemonData,
  transformPokemonSpeciesData,
  transformPokemonTypesData,
};
