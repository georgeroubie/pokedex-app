import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 2.2rem minmax(0, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  max-width: ${({ theme: { layout } }) => layout.containerWidth};
  width: 100%;
  height: 100vh;
  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `};
  margin: 0 auto;
`;

function getHeight() {
  return `${window.innerHeight}px`;
}

const AppWrapper = ({ children }) => {
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    function changeHeightValue() {
      const currentHeight = getHeight();
      if (height !== currentHeight) {
        setHeight(currentHeight);
      }
    }

    let timeout = null;
    function resizeListener() {
      clearTimeout(timeout);
      timeout = setTimeout(() => changeHeightValue(), 100);
    }

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [height]);

  return <Wrapper $height={height}>{children}</Wrapper>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
