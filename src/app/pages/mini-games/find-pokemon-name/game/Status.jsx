import PropTypes from 'prop-types';
import { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { LIVES } from '../constants';

const Wrapper = styled.div`
  display: flex;
`;

const HitPointsWrapper = styled.div`
  width: 50%;
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

const Status = ({ lives }) => {
  const width = useMemo(() => (100 * lives) / LIVES, [lives]);

  return (
    <Wrapper>
      <HitPointsWrapper>
        <HitPointsProgressBarWrapper>
          <HitPointsDescription>HP:</HitPointsDescription>
          <HitPointsProgressBar $width={width}></HitPointsProgressBar>
        </HitPointsProgressBarWrapper>
      </HitPointsWrapper>
    </Wrapper>
  );
};

Status.propTypes = {
  lives: PropTypes.number.isRequired,
};

export default Status;
