import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 0 0 ${({ theme: { spacing } }) => spacing.small};
`;

const Subtitle = ({ children }) => <Wrapper>{children}</Wrapper>;

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Subtitle;
