import { useContext } from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/layout/PageWrapper';
import PokedexBottom from '../components/layout/PokedexBottom';
import PokedexTop from '../components/layout/PokedexTop';
import Description from '../components/typography/Description';
import Subtitle from '../components/typography/Subtitle';
import Title from '../components/typography/Title';
import { AppContext } from '../state/Context';
import { DARK_THEME_KEY } from '../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../theme/themes/light';

const TopWrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const Selection = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: ${({ theme: { spacing } }) => spacing.small};
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Hyperlink = styled.a`
  margin: 0 ${({ theme: { spacing } }) => spacing.xsmall};
`;

const Settings = () => {
  const { state, setTheme } = useContext(AppContext);
  const { theme } = state;
  const id = 'theme_selection';

  const handleOnChange = ({ target }) => {
    setTheme(target.checked ? DARK_THEME_KEY : LIGHT_THEME_KEY);
  };

  return (
    <PageWrapper>
      <PokedexTop>
        <TopWrapper>
          <Title>Settings</Title>
          <Selection>
            <Checkbox type="checkbox" id={id} name={id} checked={theme === DARK_THEME_KEY} onChange={handleOnChange} />
            <Label htmlFor={id}>Dark theme</Label>
          </Selection>
        </TopWrapper>
      </PokedexTop>
      <PokedexBottom>
        <Subtitle>About</Subtitle>
        <Description>
          Pokedex app that will help you in your pokemon journey. The application is created by George Roubie (me). You
          can find the code of this web application on my GitHub page. If you like it give the repository a star on
          <Hyperlink href="https://github.com/georgeroubie/pokedex-app" target="_blank" rel="noreferrer">
            GitHub
          </Hyperlink>
          and follow me on
          <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank" rel="noreferrer">
            LinkedIn
          </Hyperlink>
          and
          <Hyperlink href="https://george-roubie.medium.com" target="_blank" rel="noreferrer">
            Medium
          </Hyperlink>
          . Thank you for using it, have fun!
        </Description>

        <Subtitle>Privacy</Subtitle>
        <Description>Pokedex app does not use any kind of cookies or tracking.</Description>
      </PokedexBottom>
    </PageWrapper>
  );
};

export default Settings;
