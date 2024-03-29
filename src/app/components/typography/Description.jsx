import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  margin: 0 0 ${({ theme: { spacing } }) => spacing.xsmall};
`;

const Description = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Description.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Description;
