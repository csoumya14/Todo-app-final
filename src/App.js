import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/themeVariable';
import GlobalStyle from './themes/GlobalStyle';
import Provider from './context';
import initTodoData from './todoData';

import MainSection from './components/MainSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider>
        <MainSection />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
