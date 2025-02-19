import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './Components/Home/Header';
import Home from './Components/Home/Home';
import { AboutUs } from './Components/Home/AboutUs';

const theme = createTheme();

const Tokens = () => <div>Link 1 Content</div>;
const Instruction = () => <div>Link 2 Content</div>;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
