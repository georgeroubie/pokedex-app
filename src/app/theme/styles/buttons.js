import { css } from 'styled-components';

export const BaseButtonStyle = css`
  display: block;
  width: 100%;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: ${({ theme: { spacing } }) => spacing.xsmall};
  border-radius: ${({ theme: { border } }) => border.radius};
  border: 0;
  background-color: ${({ theme: { colors } }) => colors.textPrimary};
  color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.normal};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};

  &:hover {
    text-decoration: none;
  }

  &.disable,
  &:disabled {
    opacity: 0.3;
    cursor: default;
    pointer-events: none;
  }
`;
