import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled from 'styled-components';
import useLoadPokemon from '../../hooks/useLoadPokemon';
import { AppContext } from '../../state/Context';

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

const PokemonName = ({ className, url, children, onClick }) => {
  const {
    state: { loading },
  } = useContext(AppContext);
  const loadPokemon = useLoadPokemon();

  function handleClick() {
    loadPokemon(url, onClick?.());
  }

  return (
    <Button className={className} type="button" onClick={handleClick} disabled={loading}>
      {children}
    </Button>
  );
};

PokemonName.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

PokemonName.defaultProps = {
  className: null,
  onClick: () => {},
};

export default PokemonName;
