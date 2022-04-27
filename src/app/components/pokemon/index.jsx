import PokemonTypes from './PokemonTypes';

const Pokemon = ({ currentPokemon }) => {
  if (!currentPokemon) return null;
  return (
    <div className="pokemon">
      <h1>{currentPokemon.name}</h1>
      <div className="sprites">
        <img src={currentPokemon.sprites.front_default} alt="" />
        <img src={currentPokemon.sprites.back_default} alt="" />
      </div>
      <PokemonTypes types={currentPokemon.types.map(({ type }) => type)} />
    </div>
  );
};

export default Pokemon;
