// src/App.jsx

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';
import { theme } from './styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <AllRoutes />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
