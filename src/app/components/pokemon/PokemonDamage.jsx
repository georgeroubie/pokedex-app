import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { getPokemonTypesData } from '../../helpers/requests';
import Description from '../typography/Description';
import Subtitle from '../typography/Subtitle';
import PokemonTypes from './PokemonTypes';

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

  const combineTypeData = (typesData, damageType) => {
    const data = typesData.first[damageType];
    data.push(
      ...typesData.second[damageType].filter(({ name }) => {
        const alreadyExists = data.filter((type) => type.name === name);
        return alreadyExists.length === 0;
      }),
    );
    return [...data];
  };

  const calculateDamages = useCallback((responses) => {
    if (responses.length === 1) {
      const typeData = responses[0].damage_relations;
      setDamageData({
        noDamageTo: typeData.no_damage_to,
        halfDamageTo: typeData.half_damage_to,
        doubleDamageTo: typeData.double_damage_to,
        noDamageFrom: typeData.no_damage_from,
        halfDamageFrom: typeData.half_damage_from,
        doubleDamageFrom: typeData.double_damage_from,
      });
    } else {
      const typesData = {
        first: responses[0].damage_relations,
        second: responses[1].damage_relations,
      };
      setDamageData({
        noDamageTo: combineTypeData(typesData, 'no_damage_to'),
        halfDamageTo: combineTypeData(typesData, 'half_damage_to'),
        doubleDamageTo: combineTypeData(typesData, 'double_damage_to'),
        noDamageFrom: combineTypeData(typesData, 'no_damage_from'),
        halfDamageFrom: combineTypeData(typesData, 'half_damage_from'),
        doubleDamageFrom: combineTypeData(typesData, 'double_damage_from'),
      });
    }
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
