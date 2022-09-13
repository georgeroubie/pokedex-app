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

const NavLink = styled(_NavLink)`
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding: ${({ theme: { spacing } }) => spacing.xsmall};
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
  border-radius: ${({ theme: { border } }) => border.radius};
  background-color: ${({ theme: { colors } }) => colors.textPrimary};
  color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
`;

const availableGames = [
  {
    name: `Who's that pokemon`,
    url: '/mini-games/find-pokemon-name',
  },
];

const MiniGames = () => (
  <PageWrapper>
    <PokedexTop>
      <TopWrapper>
        <Subtitle>Mini-games</Subtitle>
        <Description>Let's have some fun!</Description>
      </TopWrapper>
    </PokedexTop>
    <PokedexBottom>
      <Subtitle>Available games now</Subtitle>
      {availableGames.map(({ name, url }) => (
        <NavLink key={name} to={url}>
          {name}
        </NavLink>
      ))}
    </PokedexBottom>
  </PageWrapper>
);

export default MiniGames;
