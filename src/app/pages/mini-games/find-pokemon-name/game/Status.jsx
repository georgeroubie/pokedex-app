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
  padding: ${({ theme: { spacing } }) => spacing.xsmall};
`;

const HitPointsDescription = styled.span``;

const HitPointsProgressBar = styled.div`
  background-color: green;

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width}%;
    `};
`;

const Status = ({ lives }) => {
  const width = useMemo(() => (100 * lives) / LIVES, [lives]);

  return (
    <Wrapper>
      <HitPointsWrapper>
        <HitPointsProgressBarWrapper>
          <HitPointsDescription>HP</HitPointsDescription>
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
