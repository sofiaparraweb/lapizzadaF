import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar/navBar';
import Menu from './components/menu/menu';
import Reviews from './components/reviews/reviews';
import About from './components/about/about';
import Home from './components/home/home';
import Locals from './components/locals/locals';
import Footer from './components/footer/footer';
import Galery from './components/galery/galery';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/locals" element={<Locals />} />
        <Route path="/galery" element={<Galery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
