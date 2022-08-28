import { css } from 'styled-components';

const animations = css`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes blink {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export { animations };
