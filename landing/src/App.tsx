import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './Components/Home/Header';
import Home from './Components/Home/Home';

const theme = createTheme();

const Link1 = () => <div>Link 1 Content</div>;
const Link2 = () => <div>Link 2 Content</div>;
const Link3 = () => <div>Link 3 Content</div>;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/link1" element={<Link1 />} />
          <Route path="/link2" element={<Link2 />} />
          <Route path="/link3" element={<Link3 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
