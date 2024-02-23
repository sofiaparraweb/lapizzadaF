import React from 'react';
import About from '../about/about';
import Galery from '../galery/galery';
import Locals from '../locals/locals';
import Reviews from '../reviews/reviews';

const Home = () => {
  return (
    <div>
      <About />
      <Galery />
      <Locals />
      <Reviews />
      {/* Contenido de la página principal/home */}
    </div>
  );
}

export default Home;
