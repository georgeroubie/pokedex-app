import { css } from 'styled-components';
import { BaseButtonStyle } from './buttons';

const base = css`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  html,
  body {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  }

  button {
    ${BaseButtonStyle}
  }

  ul {
    margin: 0;
    padding-left: ${({ theme: { spacing } }) => spacing.normal};
  }
`;

export { base };
