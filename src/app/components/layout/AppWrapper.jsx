import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
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

const AppWrapper = ({ children }) => {
  const [height, setHeight] = useState(getHeight());

  const changeHeightValue = useCallback(() => {
    setHeight(getHeight());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', changeHeightValue);

    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
  }, [changeHeightValue]);

  function getHeight() {
    return `${document.documentElement.clientHeight || window.innerHeight}px`;
  }

  return <Wrapper $height={height}>{children}</Wrapper>;
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
