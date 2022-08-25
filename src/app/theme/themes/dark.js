import baseTheme from './base';

const DARK_THEME_KEY = 'dark';

const darkTheme = {
  ...baseTheme,
  colors: {
    backgroundPrimary: '#212121',
    backgroundSecondary: '#ee1515',
    borderPrimary: '#fff',
    textPrimary: '#dfdfdf',
    successBackgroundPrimary: '#00bc8b',
    warningBackgroundPrimary: '#ffc200',
    warningTextPrimary: '#000000',
    dangerBackgroundPrimary: '#ff606A',
    dangerTextPrimary: '#dfdfdf',
    dangerBackgroundSecondary: '#fa747c',
  },
};

export { darkTheme, DARK_THEME_KEY };
