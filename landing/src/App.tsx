import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Header } from './components/Header';

// Импорт страниц
import HomePage from './pages/home';
import TokensPage from './pages/tokens';
import { TokenPage } from './pages/tokens/[id]';
import InstructionPage from './pages/instruction';
import AboutPage from './pages/about';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196F3',
    },
    background: {
      default: '#121212',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#8F8F8F',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/tokens/:id" element={<TokenPage />} />
          <Route path="/instruction" element={<InstructionPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
