import { useContext, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { LIVES } from '../constants';
import { FindPokemonNameContext } from '../state/Context';

const Wrapper = styled.div`
  display: flex;
`;

const HitPointsWrapper = styled.div`
  width: 70%;
`;

const ScorePointsWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme: { spacing } }) => spacing.xsmall};
`;

const ScorePointsDescription = styled.span`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
`;

const ScorePoints = styled.span`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
`;

const HitPointsProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.xsmall};
  padding: ${({ theme: { spacing } }) => spacing.xsmall};
`;

const HitPointsDescription = styled.span`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
`;

const HitPointsProgressBar = styled.div`
  border: 2px solid ${({ theme: { colors } }) => colors.borderPrimary};
  border-radius: ${({ theme: { border } }) => border.radius};
  height: ${({ theme: { lineHeight } }) => lineHeight.small};
  width: 100%;
  overflow: hidden;

  &::before {
    content: '';
    display: flex;
    height: 100%;
    width: 0;
    background-color: green;
    ${({ $width }) =>
      $width > 0 &&
      css`
        width: ${$width}%;
      `};
  }
`;

const Status = () => {
  const { state } = useContext(FindPokemonNameContext);
  const { lives, score } = state;
  const width = useMemo(() => (100 * lives) / LIVES, [lives]);

  return (
    <Wrapper>
      <HitPointsWrapper>
        <HitPointsProgressBarWrapper>
          <HitPointsDescription>HP:</HitPointsDescription>
          <HitPointsProgressBar $width={width}></HitPointsProgressBar>
        </HitPointsProgressBarWrapper>
      </HitPointsWrapper>
      <ScorePointsWrapper>
        <ScorePointsDescription>SCORE:</ScorePointsDescription>
        <ScorePoints>{score}</ScorePoints>
      </ScorePointsWrapper>
    </Wrapper>
  );
};

export default Status;
