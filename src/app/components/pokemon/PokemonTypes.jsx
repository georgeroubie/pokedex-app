import PropTypes from 'prop-types';

const COLORS = {
  normal: '#C6C6A7',
  fighting: '#D67873',
  flying: '#C6B7F5',
  poison: '#C183C1',
  ground: '#EBD69D',
  rock: '#D1C17D',
  bug: '#C6D16E',
  ghost: '#A292BC',
  steel: '#D1D1E0',
  fire: '#F5AC78',
  water: '#9DB7F5',
  grass: '#A7DB8D',
  electric: '#FAE078',
  psychic: '#FA92B2',
  ice: '#BCE6E6',
  dragon: '#A27DFA',
  dark: '#A29288',
  fairy: '#F4BDC9',
};

const PokemonTypes = ({ types }) => (
  <div className="types">
    {types.map(({ name, url }) => (
      <span key={url} style={{ backgroundColor: COLORS[name] }}>
        {name}
      </span>
    ))}
  </div>
);

PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PokemonTypes;
