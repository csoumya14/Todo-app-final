import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';

import { lightTheme, darkTheme } from './themes/themeVariable';
import GlobalStyle from './themes/GlobalStyle';

import Provider from './context';

import MainSection from './components/MainSection';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Provider>
        <MainSection toggleTheme={toggleTheme} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
