import PropTypes from 'prop-types';
import styled from 'styled-components';
import Circle from '../shapes/Circle';

const Main = styled.div`
  height: calc(${({ theme: { spacing, layout } }) => `${layout.topHeight} - ${layout.menuHeight} - ${spacing.large}`});
  padding-bottom: ${({ theme: { spacing } }) => spacing.large};
  position: relative;
`;

const Frame = styled.div`
  border: ${({ theme: { border } }) => border.size} solid ${({ theme: { colors } }) => colors.borderPrimary};
  background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Loader = styled.div`
  position: absolute;
  top: -${({ theme: { spacing } }) => spacing.large};
  left: 50%;
  transform: translateX(-50%);
  height: ${({ theme: { spacing } }) => spacing.large};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: ${({ theme: { spacing } }) => spacing.small};
`;

const PokedexTop = ({ children }) => (
  <Main>
    <Frame>{children}</Frame>
    <Loader>
      <Circle />
      <Circle color="yellow" />
      <Circle color="green" />
    </Loader>
  </Main>
);

PokedexTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokedexTop;
