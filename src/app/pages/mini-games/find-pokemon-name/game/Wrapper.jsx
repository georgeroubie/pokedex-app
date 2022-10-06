import { useCallback, useContext, useEffect } from 'react';
import PokedexBottom from '../../../../components/layout/PokedexBottom';
import PokedexTop from '../../../../components/layout/PokedexTop';
import { getPokemonData, transformPokemonIdToPokemonApiUrl } from '../../../../helpers/requests';
import useGetRandomPokemonId from '../hooks/useGetRandomPokemonId';
import { FindPokemonNameContext } from '../state/Context';
import BlurredPokemon from './BlurredPokemon';
import SelectLetter from './SelectLetter';

const FindPokemonNameGameWrapper = () => {
  const randomPokemonId = useGetRandomPokemonId();
  const { setPokemon, setPlayerFounds } = useContext(FindPokemonNameContext);

  const startGame = useCallback(async () => {
    const apiUrl = transformPokemonIdToPokemonApiUrl(randomPokemonId);
    const pokemon = await getPokemonData(apiUrl);

    setPokemon({
      name: pokemon.name,
      image: pokemon.sprites.front,
      nameArray: pokemon.name.split(''),
    });

    setPlayerFounds(pokemon.name.split('').map(() => ''));
  }, [randomPokemonId, setPokemon, setPlayerFounds]);

  useEffect(() => {
    startGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PokedexTop>
        <BlurredPokemon />
      </PokedexTop>
      <PokedexBottom>
        <SelectLetter />
      </PokedexBottom>
    </>
  );
};

export default FindPokemonNameGameWrapper;
