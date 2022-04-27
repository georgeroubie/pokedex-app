import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.div`
  background-color: #f0f0f0;
  padding: 24px;
  height: 35vh;
`;

const Frame = styled.div`
  border: 4px solid #000;
  border-radius: 15px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const PokedexBottom = ({ children }) => (
  <Main>
    <Frame>{children}</Frame>
  </Main>
);

PokedexBottom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokedexBottom;
