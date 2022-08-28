import baseTheme from './base';

const DARK_THEME_KEY = 'dark';

const darkTheme = {
  ...baseTheme,
  colors: {
    backgroundPrimary: '#212121',
    backgroundSecondary: '#ee1515',
    borderPrimary: '#fff',
    textPrimary: '#dfdfdf',
  },
};

export { darkTheme, DARK_THEME_KEY };
