function getEvolutionData(chain) {
  const evoChain = [];
  let evolutionChain = [];

  do {
    const numberOfEvolutions = evolutionChain['evolves_to'].length;

    evoChain.push({
      species_name: evolutionChain.species.name,
      min_level: !evolutionChain ? 1 : evolutionChain.min_level,
      trigger_name: !evolutionChain ? null : evolutionChain.trigger.name,
      item: !evolutionChain ? null : evolutionChain.item,
    });

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        evoChain.push({
          species_name: evolutionChain.evolves_to[i].species.name,
          min_level: !evolutionChain.evolves_to[i] ? 1 : evolutionChain.evolves_to[i].min_level,
          trigger_name: !evolutionChain.evolves_to[i] ? null : evolutionChain.evolves_to[i].trigger.name,
          item: !evolutionChain.evolves_to[i] ? null : evolutionChain.evolves_to[i].item,
        });
      }
    }

    evolutionChain = evolutionChain['evolves_to'][0];
  } while (!!evolutionChain && evolutionChain.hasOwnProperty('evolves_to'));

  return evoChain;
}

export { getEvolutionData };
