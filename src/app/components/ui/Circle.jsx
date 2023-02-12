import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../../state/Context';
import { setAnimation } from './../../theme/styles/helpers';

const Wrapper = styled.span`
  display: inline-block;
  width: ${({ theme: { spacing } }) => spacing.small};
  height: ${({ theme: { spacing } }) => spacing.small};
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  border: 1px solid ${({ theme: { colors } }) => colors.borderPrimary};
  border-radius: 50%;

  ${({ $loading }) =>
    $loading &&
    css`
      ${setAnimation('0.2s linear blink infinite')}
    `}

  ${({ $color }) =>
    $color &&
    css`
      background-color: ${$color};
    `}

  ${({ $big }) =>
    $big &&
    css`
      width: ${({ theme: { spacing } }) => spacing.normal};
      height: ${({ theme: { spacing } }) => spacing.normal};
    `}
`;

const Circle = ({ className, color, big }) => {
  const { state } = useContext(AppContext);
  const { loading } = state;

  return <Wrapper className={className} $loading={loading} $big={big} $color={color} />;
};

Circle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  big: PropTypes.bool,
};

Circle.defaultProps = {
  className: null,
  color: null,
  big: false,
};

export default Circle;
