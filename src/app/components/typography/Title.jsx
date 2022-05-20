import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-size: 2rem;
  line-height: 2rem;
  margin: 0 0 ${({ theme: { spacing } }) => spacing.normal};
`;

const Title = ({ children }) => <Wrapper>{children}</Wrapper>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
