import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-size: 1.1rem;
  margin: 0 0 ${({ theme: { spacing } }) => spacing.small};
`;

const Description = ({ children }) => <Wrapper>{children}</Wrapper>;

Description.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Description;
