import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import PokedexBottom from '../../components/layout/PokedexBottom';
import PokedexTop from '../../components/layout/PokedexTop';
import Description from '../../components/typography/Description';
import Subtitle from '../../components/typography/Subtitle';

const TopWrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const List = styled.ul``;

const ListItem = styled.li``;

const NavLink = styled(_NavLink)`
  display: block;
  width: 100%;
`;

const availableGames = [
  {
    name: `Who's that pokemon`,
    url: '/mini-games/find-pokemon-name',
  },
];

const MiniGames = () => {
  return (
    <PageWrapper>
      <PokedexTop>
        <TopWrapper>
          <Subtitle>Mini-games</Subtitle>
          <Description>Let's have some fun!</Description>
        </TopWrapper>
      </PokedexTop>
      <PokedexBottom>
        <Subtitle>Games List</Subtitle>
        <List>
          {availableGames.map(({ name, url }) => (
            <ListItem key={name}>
              <NavLink to={url}>{name}</NavLink>
            </ListItem>
          ))}
        </List>
      </PokedexBottom>
    </PageWrapper>
  );
};

export default MiniGames;
