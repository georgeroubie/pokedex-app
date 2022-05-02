import PokemonTypes from './PokemonTypes';

const Pokemon = ({ pokemon }) => {
  if (!pokemon) return null;
  return (
    <div className="pokemon">
      <h1>{pokemon.name}</h1>
      <div className="sprites">
        <img src={pokemon.sprites.front_default} alt="" />
        <img src={pokemon.sprites.back_default} alt="" />
      </div>
      <PokemonTypes types={pokemon.types.map(({ type }) => type)} />
    </div>
  );
};

export default Pokemon;
