import PropTypes from 'prop-types';
import styled from 'styled-components';
import _Circle from '../shapes/Circle';

const Main = styled.div`
  background-color: #dfdfdf;
  padding: 30px 20px 40px;
  height: 65vh;
  border-radius: 5px;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 30px 0 0 30px;
    border-color: transparent transparent transparent #ee1515;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const TopCircleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 30px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TopCircle = styled(_Circle)``;

const BottomCircle = styled(_Circle)`
  position: absolute;
  bottom: 17px;
  left: 20px;
`;

const Speaker = styled.div`
  position: absolute;
  bottom: 6px;
  right: 20px;
  width: 40px;
`;

const Line = styled.div`
  height: 1px;
  background-color: #000;
  margin-bottom: 5px;
`;

const Frame = styled.div`
  border: 4px solid #000;
  border-radius: 5px;
  padding: 16px;
  background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const PokedexBottom = ({ children }) => (
  <Main>
    <Frame>{children}</Frame>
    <TopCircleContainer>
      <TopCircle />
      <TopCircle />
    </TopCircleContainer>
    <BottomCircle big />
    <Speaker>
      <Line />
      <Line />
      <Line />
      <Line />
    </Speaker>
  </Main>
);

PokedexBottom.propTypes = {
  children: PropTypes.node,
};

PokedexBottom.defaultProps = {
  children: null,
};

export default PokedexBottom;
