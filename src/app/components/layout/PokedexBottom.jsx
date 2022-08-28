import PropTypes from 'prop-types';
import styled from 'styled-components';
import _Circle from '../shapes/Circle';

const Main = styled.div`
  position: relative;
  height: calc(${({ theme: { spacing, layout } }) => `${layout.bottomHeight} - ${spacing.large}`});
  border-radius: ${({ theme: { border } }) => border.radius};
  background-color: #dfdfdf;
  padding: ${({ theme: { spacing } }) => `${spacing.large} ${spacing.normal} ${spacing.xlarge}`};

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${({ theme: { spacing } }) => `${spacing.large} 0 0 ${spacing.large}`};
    border-color: transparent transparent transparent ${({ theme: { colors } }) => colors.backgroundSecondary};
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
  height: ${({ theme: { spacing } }) => spacing.large};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: ${({ theme: { spacing } }) => spacing.normal};
`;

const TopCircle = styled(_Circle)``;

const BottomCircle = styled(_Circle)`
  position: absolute;
  bottom: ${({ theme: { spacing } }) => spacing.small};
  left: ${({ theme: { spacing } }) => spacing.normal};
`;

const Speaker = styled.div`
  position: absolute;
  bottom: ${({ theme: { spacing } }) => spacing.xsmall};
  right: ${({ theme: { spacing } }) => spacing.normal};
  width: 40px;
`;

const Line = styled.div`
  height: 1px;
  background-color: #000;
  margin-bottom: ${({ theme: { spacing } }) => spacing.xxsmall};
`;

const Frame = styled.div`
  border: ${({ theme: { border } }) => border.size} solid ${({ theme: { colors } }) => colors.borderPrimary};
  padding: ${({ theme: { spacing } }) => spacing.normal};
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