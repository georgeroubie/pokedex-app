import { css } from 'styled-components';

const base = css`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  }
`;

export { base };
