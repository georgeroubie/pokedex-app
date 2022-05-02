import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { getPokemonTypes } from './../../helpers/requests';
import PokemonTypes from './PokemonTypes';

const PokemonDamage = ({ pokemon }) => {
  const { types } = pokemon;
  // Attack
  const [noDamageTo, setNoDamageTo] = useState([]);
  const [halfDamageTo, setHalfDamageTo] = useState([]);
  const [doubleDamageTo, setDoubleDamageTo] = useState([]);
  // Defence
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
      const typeData = responses[0].data.damage_relations;
      console.log(typeData);
      setNoDamageTo(typeData.no_damage_to);
      setHalfDamageTo(typeData.half_damage_to);
      setDoubleDamageTo(typeData.double_damage_to);

      setNoDamageFrom(typeData.no_damage_from);
      setHalfDamageFrom(typeData.half_damage_from);
      setDoubleDamageFrom(typeData.double_damage_from);
    } else {
      const typesData = {
        first: responses[0].data.damage_relations,
        second: responses[1].data.damage_relations,
      };
      calculateDamageTo(typesData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const apiUrls = types.map(({ type }) => type.url);
    getPokemonTypes(apiUrls).then(axios.spread((...responses) => calculateDamages(responses)));
  }, [types, calculateDamages]);

  return (
    <div className="damages">
      <h3>Attack</h3>
      {Boolean(noDamageTo.length) && (
        <div className="damage">
          No effect: <PokemonTypes types={noDamageTo} />
        </div>
      )}
      {Boolean(halfDamageTo.length) && (
        <div className="damage">
          Not very effective: <PokemonTypes types={halfDamageTo} />
        </div>
      )}
      {Boolean(doubleDamageTo.length) && (
        <div className="damage">
          Super-effective: <PokemonTypes types={doubleDamageTo} />
        </div>
      )}
      <h3>Defence</h3>
      {Boolean(noDamageFrom.length) && (
        <div className="damage">
          No effect: <PokemonTypes types={noDamageFrom} />
        </div>
      )}
      {Boolean(halfDamageFrom.length) && (
        <div className="damage">
          Not very effective: <PokemonTypes types={halfDamageFrom} />
        </div>
      )}
      {Boolean(doubleDamageFrom.length) && (
        <div className="damage">
          Super-effective: <PokemonTypes types={doubleDamageFrom} />
        </div>
      )}
    </div>
  );
};

export default PokemonDamage;
