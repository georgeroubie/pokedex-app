import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Gear from '../icons/Gear';
import MasterBall from '../icons/MasterBall';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 500px;
  margin: 0 auto;
  height: 25px;
`;

const NavLink = styled(_NavLink)`
  text-decoration: none;
  margin-left: 14px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Menu = () => (
  <Wrapper>
    <NavLink to="/">
      <MasterBall />
    </NavLink>
    <NavLink to="/settings">
      <Gear />
    </NavLink>
  </Wrapper>
);

export default Menu;
