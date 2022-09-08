import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  padding: ${({ theme: { spacing } }) => `0 ${spacing.normal} ${spacing.large}`};
  display: grid;
  grid-area: 2 / 1 / 3 / 2;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 40% 60%;
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
