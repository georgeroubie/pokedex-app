import { css } from 'styled-components';

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
`;

export { base };
