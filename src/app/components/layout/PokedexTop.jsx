import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.div`
  height: calc(${({ theme: { layout } }) => `${layout.topHeight} - ${layout.menuHeight}`});
  padding-bottom: ${({ theme: { spacing } }) => spacing.normal};
`;

const Frame = styled.div`
  border: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};
  background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const PokedexTop = ({ children }) => (
  <Main>
    <Frame>{children}</Frame>
  </Main>
);

PokedexTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokedexTop;
