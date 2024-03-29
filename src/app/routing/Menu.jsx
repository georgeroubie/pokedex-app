import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Circle from '../components/ui/Circle';
import _GameBoy from '../icons/GameBoy';
import _Gear from '../icons/Gear';
import _Pokeball from '../icons/Pokeball';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: 1 / 1 / 2 / 2;
  padding: 0 ${({ theme: { spacing } }) => spacing.normal};
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
  gap: ${({ theme: { spacing } }) => spacing.normal};
`;

const NavLink = styled(_NavLink)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

const Gear = styled(_Gear)`
  width: 1.6rem;
  height: 1.6rem;
`;

const GameBoy = styled(_GameBoy)`
  width: 1.5rem;
  height: 1.5rem;
`;

const Pokeball = styled(_Pokeball)`
  width: 1.8rem;
  height: 1.8rem;
`;

const Menu = () => {
  return (
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
        <NavLink to="/mini-games/find-pokemon-name">
          <GameBoy />
        </NavLink>
        <NavLink to="/settings">
          <Gear />
        </NavLink>
      </NavLinkWrapper>
    </Wrapper>
  );
};

export default Menu;
