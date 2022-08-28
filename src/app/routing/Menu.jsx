import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Circle from '../components/shapes/Circle';
import _Gear from '../icons/Gear';
import _Pokeball from '../icons/Pokeball';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 ${({ theme: { spacing } }) => spacing.normal};
  max-width: ${({ theme: { layout } }) => layout.containerWidth};
  height: ${({ theme: { layout } }) => layout.menuHeight};
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: ${({ theme: { spacing } }) => spacing.small};
`;

const NavLinkWrapper = styled.div`
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing.small};
`;

const NavLink = styled(_NavLink)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

const Gear = styled(_Gear)`
  width: 20px;
  height: 20px;
`;

const Pokeball = styled(_Pokeball)`
  width: 24px;
  height: 24px;
`;

const Menu = () => (
  <Wrapper>
    <Loader>
      <Circle />
      <Circle color="yellow" />
      <Circle color="green" />
    </Loader>
    <NavLinkWrapper>
      <NavLink to="/">
        <Pokeball />
      </NavLink>
      <NavLink to="/settings">
        <Gear />
      </NavLink>
    </NavLinkWrapper>
  </Wrapper>
);

export default Menu;
