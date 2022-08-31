function getEvolutionData(chain) {
  const evoChain = [];
  let evoData = chain;

  do {
    const numberOfEvolutions = evoData['evolves_to'].length;

    evoChain.push({
      species_name: evoData.species.name,
      min_level: !evoData ? 1 : evoData.min_level,
      trigger_name: !evoData ? null : evoData?.trigger?.name,
      item: !evoData ? null : evoData.item,
    });

    console.log(numberOfEvolutions);

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        console.log(evoData.evolves_to[i]);
        evoChain.push({
          species_name: evoData.evolves_to[i].species.name,
          min_level: !evoData.evolves_to[i] ? 1 : evoData.evolves_to[i].min_level,
          trigger_name: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].trigger.name,
          item: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item,
        });
      }
    }

    evoData = evoData['evolves_to'][0];
  } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

  return evoChain;
}

export { getEvolutionData };
