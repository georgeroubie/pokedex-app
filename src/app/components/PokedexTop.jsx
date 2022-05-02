import PropTypes from 'prop-types';
import styled from 'styled-components';
import Circle from './Circle';

const Main = styled.div`
  height: calc(35vh - 112px);
  margin-bottom: 24px;
  position: relative;
`;

const Frame = styled.div`
  border: 4px solid #000;
  background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Loader = styled.div`
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
