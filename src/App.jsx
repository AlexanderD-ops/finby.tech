import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Home/Header';
import Home from './Components/Home/Home';

const Link1 = () => <div>Link 1 Content</div>;
const Link2 = () => <div>Link 2 Content</div>;
const Link3 = () => <div>Link 3 Content</div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link1" element={<Link1 />} />
        <Route path="/link2" element={<Link2 />} />
        <Route path="/link3" element={<Link3 />} />
      </Routes>
    </Router>
  );
}

export default App;
