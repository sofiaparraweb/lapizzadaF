import React from 'react';

import About from '../about/about';
import Galery from '../galery/galery';
import Locals from '../locals/locals';
import Reviews from '../reviews/reviews';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenidos a La Pizzada</h1>
      <div className="imageHomeContainer">
        <img src={'https://w0.peakpx.com/wallpaper/53/560/HD-wallpaper-food-pizza.jpg'} alt="lagruta" />
      </div>
      <div className="about">
        <h2 className="sectionTitle">Nosotros</h2>
        <p className="sectionSubtitle">Conoce nuestra historia y valores</p>
        <About />
      </div>
      <div className="galery">
        <h2 className="sectionTitle">Galería</h2>
        <p className="sectionSubtitle">Imágenes de nuestros platos y locales</p>
        <Galery />
      </div>
      <div className="locals">
        <h2 className="sectionTitle">Nuestros locales</h2>
        <p className="sectionSubtitle">Encuentranos en diferentes puntos de la ciudad</p>
        <Locals />
      </div>
      <div className="reviews">
        <h2 className="sectionTitle">Opiniones</h2>
        <p className="sectionSubtitle">Lo que opinan nuestros clientes</p>
        <Reviews />
      </div>
    </div>
  );
}

export default Home;