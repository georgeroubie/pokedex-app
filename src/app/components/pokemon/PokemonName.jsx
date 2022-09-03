import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled from 'styled-components';
import useLoadPokemon from '../../hooks/useLoadPokemon';
import { AppContext } from '../../state/Context';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  gap: ${({ theme: { spacing } }) => spacing.xsmall};
`;

const Button = styled.button`
  border-radius: 0;
  border: 0;
  padding: 0 ${({ theme: { spacing } }) => spacing.xsmall};
  background-color: ${({ theme: { colors } }) => colors.textPrimary};
  color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  width: max-content;
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
`;

const PokemonName = ({ className, pokemons, onClick }) => {
  const {
    state: { loading },
  } = useContext(AppContext);
  const loadPokemon = useLoadPokemon();

  function handleClick(url) {
    loadPokemon(url, onClick?.());
  }

  return (
    <Wrapper className={className}>
      {pokemons.map(({ name, url }) => (
        <Button key={url} type="button" disabled={loading} onClick={() => handleClick(url)}>
          {name}
        </Button>
      ))}
    </Wrapper>
  );
};

PokemonName.propTypes = {
  className: PropTypes.string,
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func,
};

PokemonName.defaultProps = {
  className: null,
  onClick: () => {},
};

export default PokemonName;
