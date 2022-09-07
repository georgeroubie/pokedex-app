import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { getPokemonTypesData } from '../../helpers/requests';
import Description from '../typography/Description';
import Subtitle from '../typography/Subtitle';
import PokemonTypes from './PokemonTypes';

const damageTypes = [
  'no_damage_to',
  'half_damage_to',
  'double_damage_to',
  'no_damage_from',
  'half_damage_from',
  'double_damage_from',
];

const PokemonDamage = ({ pokemon }) => {
  const { types } = pokemon;
  const [damageData, setDamageData] = useState({
    // Attack
    noDamageTo: null,
    halfDamageTo: null,
    doubleDamageTo: null,
    // Defense
    noDamageFrom: null,
    halfDamageFrom: null,
    doubleDamageFrom: null,
  });

  function combineTypesData(typesData) {
    return damageTypes.reduce((acc, damageType) => {
      const data = typesData.first[damageType];
      data.push(
        ...typesData.second[damageType].filter(({ name }) => {
          const alreadyExists = data.filter((type) => type.name === name);
          return alreadyExists.length === 0;
        }),
      );
      return {
        ...acc,
        [damageType]: [...data],
      };
    }, {});
  }

  const calculateDamages = useCallback((responses) => {
    let typesData;
    if (responses.length === 1) {
      typesData = responses[0].damage_relations;
    } else {
      typesData = combineTypesData({
        first: responses[0].damage_relations,
        second: responses[1].damage_relations,
      });
    }
    setDamageData({
      noDamageTo: typesData.no_damage_to,
      halfDamageTo: typesData.half_damage_to,
      doubleDamageTo: typesData.double_damage_to,
      noDamageFrom: typesData.no_damage_from,
      halfDamageFrom: typesData.half_damage_from,
      doubleDamageFrom: typesData.double_damage_from,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const apiUrls = types.map(({ type }) => type.url);
    getPokemonTypesData(apiUrls).then(axios.spread((...responses) => calculateDamages(responses)));
  }, [types, calculateDamages]);

  return (
    <>
      <Subtitle>Attack</Subtitle>
      {damageData.noDamageTo && (
        <>
          <Description>No effect:</Description>
          <PokemonTypes types={damageData.noDamageTo} />
        </>
      )}
      {damageData.halfDamageTo && (
        <>
          <Description>Not very effective:</Description>
          <PokemonTypes types={damageData.halfDamageTo} />
        </>
      )}
      {damageData.doubleDamageTo && (
        <>
          <Description>Super-effective:</Description>
          <PokemonTypes types={damageData.doubleDamageTo} />
        </>
      )}
      <Subtitle>Defense</Subtitle>
      {damageData.noDamageFrom && (
        <>
          <Description>No effect:</Description>
          <PokemonTypes types={damageData.noDamageFrom} />
        </>
      )}
      {damageData.halfDamageFrom && (
        <>
          <Description>Not very effective:</Description>
          <PokemonTypes types={damageData.halfDamageFrom} />
        </>
      )}
      {damageData.doubleDamageFrom && (
        <>
          <Description>Super-effective:</Description>
          <PokemonTypes types={damageData.doubleDamageFrom} />
        </>
      )}
    </>
  );
};

export default PokemonDamage;
