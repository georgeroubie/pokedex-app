import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #f00;
  border: 1px solid #000;
  border-radius: 50%;

  ${({ $color }) =>
    $color &&
    css`
      background-color: ${$color};
    `}

  ${({ $big }) =>
    $big &&
    css`
      width: 15px;
      height: 15px;
    `}
`;

const Circle = ({ className, color, big }) => <Wrapper className={className} $big={big} $color={color} />;

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
