import { DARK_THEME_KEY } from './dark';
import { LIGHT_THEME_KEY } from './light';

const SAVED_THEME_KEY = 'user_selected_theme';

function saveThemeSelection(theme) {
  return localStorage.setItem(SAVED_THEME_KEY, theme);
}

function getCurrentTheme() {
  const savedTheme = localStorage.getItem(SAVED_THEME_KEY);
  if (savedTheme) {
    return savedTheme;
  } else if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME_KEY;
    } else {
      return LIGHT_THEME_KEY;
    }
  }
  return DARK_THEME_KEY;
}

export { getCurrentTheme, saveThemeSelection };
