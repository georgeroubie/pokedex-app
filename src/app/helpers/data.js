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

function getEvolutions(chain) {
  return evolvesTo([], chain);
}

export { getEvolutions };
