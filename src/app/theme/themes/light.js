import baseTheme from './base';

const LIGHT_THEME_KEY = 'light';

const lightTheme = {
  ...baseTheme,
  colors: {
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#ee1515',
    borderPrimary: '#000',
    borderSecondary: '#f0f0f0',
    textPrimary: '#333333',
  },
};

export { lightTheme, LIGHT_THEME_KEY };
