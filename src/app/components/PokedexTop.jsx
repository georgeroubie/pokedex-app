import PropTypes from 'prop-types';
import styled from 'styled-components';
import _Reload from '../icons/Reload';

const Main = styled.div`
  background-color: #ee1515;
  padding: 24px;
  height: calc(65vh - 80px);
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

const Separator = styled.div`
  position: relative;
  border-top: 5px solid #222224;
  border-bottom: 5px solid #222224;
  background-color: #fff;
  height: 40px;
`;

const Refresh = styled.a`
  display: inline-flex;
  position: absolute;
  top: -15px;
  left: calc(50% - 30px);
  align-items: center;
  justify-content: space-around;
  border: 5px solid #222224;
  border-radius: 50%;
  background-color: #fff;
  width: 60px;
  height: 60px;
  text-decoration: none;
  color: #222224;
  font-size: 2rem;
`;

const Reload = styled(_Reload)`
  width: 40px;
`;

const PokedexTop = ({ children }) => (
  <>
    <Main>
      <Frame>{children}</Frame>
    </Main>
    <Separator>
      <Refresh href="/">
        <Reload />
      </Refresh>
    </Separator>
  </>
);

PokedexTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokedexTop;
