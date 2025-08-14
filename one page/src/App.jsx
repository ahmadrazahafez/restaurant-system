import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Page from './Page';
import Watch from './Watch';
import Grid from './Grid';

const App = () => {
  return (
    <div className="min-h-screen bg-white   text-black">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page" element={<Page/>} />
          <Route path="/watch" element={<Watch/>} />
          <Route path="/grid" element={<Grid/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
