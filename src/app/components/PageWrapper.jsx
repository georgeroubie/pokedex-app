import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  max-width: 500px;
  margin: 0 auto;
`;

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
