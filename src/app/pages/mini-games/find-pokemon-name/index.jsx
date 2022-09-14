import { useState } from 'react';
import styled from 'styled-components';
import PageWrapper from '../../../components/layout/PageWrapper';
import PokedexBottom from '../../../components/layout/PokedexBottom';
import PokedexTop from '../../../components/layout/PokedexTop';
import Description from '../../../components/typography/Description';
import Subtitle from '../../../components/typography/Subtitle';
import FindPokemonNameGame from './game';

const TopWrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const StartButton = styled.button`
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
  const [startGame, setStartGame] = useState(false);

  if (startGame) {
    return <FindPokemonNameGame />;
  }

  return (
    <PageWrapper>
      <PokedexTop>
        <TopWrapper>
          <Subtitle>Who's that Pokemon</Subtitle>
          <Description>A random Pokemon will appear and you have to find its name.</Description>
        </TopWrapper>
      </PokedexTop>
      <PokedexBottom>
        <StartButton type="button" onClick={() => setStartGame(true)}>
          Start
        </StartButton>
      </PokedexBottom>
    </PageWrapper>
  );
};

export default FindPokemonName;
