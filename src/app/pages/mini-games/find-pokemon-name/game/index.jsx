import { useCallback, useEffect, useState } from 'react';
import PageWrapper from '../../../../components/layout/PageWrapper';
import PokedexBottom from '../../../../components/layout/PokedexBottom';
import PokedexTop from '../../../../components/layout/PokedexTop';
import { getPokemonData, transformPokemonIdToPokemonApiUrl } from '../../../../helpers/requests';
import { LIVES } from '../constants';
import useGetRandomPokemonId from '../hooks/useGetRandomPokemonId';
import BlurredPokemon from './BlurredPokemon';
import SelectLetter from './SelectLetter';

const FindPokemonNameGame = () => {
  const [game, setGame] = useState();
  const randomPokemonId = useGetRandomPokemonId();

  const startGame = useCallback(async () => {
    const pokemon = await getPokemonData(transformPokemonIdToPokemonApiUrl(randomPokemonId));

    setGame({
      lives: LIVES,
      name: pokemon.name,
      image: pokemon.sprites.front,
      nameArray: pokemon.name.split(''),
      foundNameArray: pokemon.name.split('').map(() => ''),
    });
  }, [randomPokemonId]);

  useEffect(() => {
    startGame();
  }, [randomPokemonId, startGame]);

  if (!game) {
    return null;
  }

  return (
    <PageWrapper>
      <PokedexTop>
        <BlurredPokemon game={game} />
      </PokedexTop>
      <PokedexBottom>
        <SelectLetter game={game} setGame={setGame} />
      </PokedexBottom>
    </PageWrapper>
  );
};

export default FindPokemonNameGame;
