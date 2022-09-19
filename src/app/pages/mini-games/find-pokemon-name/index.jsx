import { useContext } from 'react';
import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PageWrapper from '../../../components/layout/PageWrapper';
import PokedexBottom from '../../../components/layout/PokedexBottom';
import PokedexTop from '../../../components/layout/PokedexTop';
import Description from '../../../components/typography/Description';
import Subtitle from '../../../components/typography/Subtitle';
import { AppContext } from '../../../state/Context';
import { LIVES } from './constants';
import useGetRandomPokemonId from './hooks/useGetRandomPokemonId';
import { FindPokemonNameProvider } from './state/Context';

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
  border: 0;
  background-color: ${({ theme: { colors } }) => colors.textPrimary};
  color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
`;

const FindPokemonName = () => {
  const { state } = useContext(AppContext);
  const { pokemonNames } = state;
  const randomPokemonId = useGetRandomPokemonId();

  return (
    <FindPokemonNameProvider pokemonNames={pokemonNames}>
      <PageWrapper>
        <PokedexTop>
          <TopWrapper>
            <Subtitle>Who's that Pokemon?</Subtitle>
            <Description>Find the pokemon name, you have {LIVES} lives.</Description>
          </TopWrapper>
        </PokedexTop>
        <PokedexBottom>
          <NavLink to={`/mini-games/find-pokemon-name/${randomPokemonId}`}>START</NavLink>
        </PokedexBottom>
      </PageWrapper>
    </FindPokemonNameProvider>
  );
};

export default FindPokemonName;
