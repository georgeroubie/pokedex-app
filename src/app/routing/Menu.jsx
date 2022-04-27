import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FireType from '../icons/FireType';
import Gear from '../icons/Gear';
import MasterBall from '../icons/MasterBall';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 500px;
  margin: 0 auto;
  height: 40px;
`;

const NavLink = styled(_NavLink)`
  text-decoration: none;

  svg {
    width: 30px;
    height: 30px;
  }
`;

const Menu = () => (
  <Wrapper>
    <NavLink to="/">
      <MasterBall />
    </NavLink>
    <NavLink to="/types">
      <FireType />
    </NavLink>
    <NavLink to="/settings">
      <Gear />
    </NavLink>
  </Wrapper>
);

export default Menu;
