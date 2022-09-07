import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { getPokemonTypesData } from '../../helpers/requests';
import Description from '../typography/Description';
import Subtitle from '../typography/Subtitle';
import PokemonTypes from './PokemonTypes';

const PokemonDamage = ({ pokemon }) => {
  const { types } = pokemon;
  // Attack
  const [noDamageTo, setNoDamageTo] = useState([]);
  const [halfDamageTo, setHalfDamageTo] = useState([]);
  const [doubleDamageTo, setDoubleDamageTo] = useState([]);
  // Defense
  const [noDamageFrom, setNoDamageFrom] = useState([]);
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
  const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);

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

  const calculateDamageTo = (typesData) => {
    setNoDamageTo(combineTypeData(typesData, 'no_damage_to'));
    setHalfDamageTo(combineTypeData(typesData, 'half_damage_to'));
    setDoubleDamageTo(combineTypeData(typesData, 'double_damage_to'));

    setNoDamageFrom(combineTypeData(typesData, 'no_damage_from'));
    setHalfDamageFrom(combineTypeData(typesData, 'half_damage_from'));
    setDoubleDamageFrom(combineTypeData(typesData, 'double_damage_from'));
  };

  const calculateDamages = useCallback((responses) => {
    if (responses.length === 1) {
      const typeData = responses[0].damage_relations;
      setNoDamageTo(typeData.no_damage_to);
      setHalfDamageTo(typeData.half_damage_to);
      setDoubleDamageTo(typeData.double_damage_to);

      setNoDamageFrom(typeData.no_damage_from);
      setHalfDamageFrom(typeData.half_damage_from);
      setDoubleDamageFrom(typeData.double_damage_from);
    } else {
      const typesData = {
        first: responses[0].damage_relations,
        second: responses[1].damage_relations,
      };
      calculateDamageTo(typesData);
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
      {Boolean(noDamageTo.length) && (
        <>
          <Description>No effect:</Description>
          <PokemonTypes types={noDamageTo} />
        </>
      )}
      {Boolean(halfDamageTo.length) && (
        <>
          <Description>Not very effective:</Description>
          <PokemonTypes types={halfDamageTo} />
        </>
      )}
      {Boolean(doubleDamageTo.length) && (
        <>
          <Description>Super-effective:</Description>
          <PokemonTypes types={doubleDamageTo} />
        </>
      )}
      <Subtitle>Defense</Subtitle>
      {Boolean(noDamageFrom.length) && (
        <>
          <Description>No effect:</Description>
          <PokemonTypes types={noDamageFrom} />
        </>
      )}
      {Boolean(halfDamageFrom.length) && (
        <>
          <Description>Not very effective:</Description>
          <PokemonTypes types={halfDamageFrom} />
        </>
      )}
      {Boolean(doubleDamageFrom.length) && (
        <>
          <Description>Super-effective:</Description>
          <PokemonTypes types={doubleDamageFrom} />
        </>
      )}
    </>
  );
};

export default PokemonDamage;
