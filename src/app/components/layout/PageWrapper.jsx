import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  max-width: ${({ theme: { layout } }) => layout.containerWidth};
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  padding: ${({ theme: { spacing } }) => `0 ${spacing.normal} ${spacing.large}`};
  height: calc(100vh - ${({ theme: { layout } }) => layout.menuHeight});
  overflow-y: auto;
`;

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
