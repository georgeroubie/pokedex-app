import { useContext } from 'react';
import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import PokedexBottom from '../../components/layout/PokedexBottom';
import PokedexTop from '../../components/layout/PokedexTop';
import Description from '../../components/typography/Description';
import Hyperlink from '../../components/typography/Hyperlink';
import Subtitle from '../../components/typography/Subtitle';
import Donation from '../../components/ui/Donation';
import { AppContext } from '../../state/Context';
import { DARK_THEME_KEY } from '../../theme/themes/dark';
import { LIGHT_THEME_KEY } from '../../theme/themes/light';

const TopWrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const Selection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.large};
`;

const Checkbox = styled.input`
  margin-right: ${({ theme: { spacing } }) => spacing.small};
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Settings = () => {
  const { state, setTheme } = useContext(AppContext);
  const { theme } = state;
  const id = 'theme_selection';

  function handleOnChange({ target }) {
    setTheme(target.checked ? DARK_THEME_KEY : LIGHT_THEME_KEY);
  }

  return (
    <PageWrapper>
      <PokedexTop>
        <TopWrapper>
          <Subtitle>Settings</Subtitle>
          <Selection>
            <Checkbox type="checkbox" id={id} name={id} checked={theme === DARK_THEME_KEY} onChange={handleOnChange} />
            <Label htmlFor={id}>Dark theme</Label>
          </Selection>
          <Donation />
        </TopWrapper>
      </PokedexTop>
      <PokedexBottom>
        <Subtitle>About</Subtitle>
        <Description>
          A Pokedex app that will help you in your pokemon journey. Also the Pokedex has the mini game "Who's that
          Pokemon". You can find the code of this web application on my GitHub page. If you like it give the repository
          a star on&nbsp;
          <Hyperlink href="https://github.com/georgeroubie/pokedex-app" target="_blank" rel="noreferrer">
            GitHub
          </Hyperlink>
          . Thank you for using it, have fun!
        </Description>
        <Subtitle>Creator</Subtitle>
        <Description>
          My name is George Roubie and you can follow me on&nbsp;
          <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank">
            LinkedIn
          </Hyperlink>
          ,&nbsp;
          <Hyperlink href="https://george-roubie.medium.com" target="_blank">
            Medium
          </Hyperlink>
          ,&nbsp;
          <Hyperlink href="https://codepen.io/georgeroubie" target="_blank">
            Codepen
          </Hyperlink>
          &nbsp;and&nbsp;
          <Hyperlink href="https://github.com/georgeroubie" target="_blank">
            GitHub
          </Hyperlink>
          .
        </Description>

        <Subtitle>Data</Subtitle>
        <Description>
          All the data are provided from the&nbsp;
          <Hyperlink href="https://pokeapi.co" target="_blank" rel="noreferrer">
            pokeapi
          </Hyperlink>
          .
        </Description>

        <Subtitle>Privacy</Subtitle>
        <Description>Pokedex app does not use any kind of cookies or tracking.</Description>
      </PokedexBottom>
    </PageWrapper>
  );
};

export default Settings;
