import React from 'react';
import "./home.css"
import { Carousel as CarouselBootstrap } from 'react-bootstrap';
import foto1 from "../../assets/istockphoto-938742222-612x612.jpg"
import foto2 from "../../assets/foto2.jpeg"
import foto3 from "../../assets/foto3.webp"

const Carousel = () => {
  return (
    <CarouselBootstrap>
      <CarouselBootstrap.Item>
        <img
          className="d-block w-100 img-fluid"
          src={foto1}
          alt="First slide"
        />
        <CarouselBootstrap.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselBootstrap.Caption>
      </CarouselBootstrap.Item>
      <CarouselBootstrap.Item>
      <img
          className="d-block w-100 img-fluid"
          src={foto2}
          alt="Second slide"
        />
        <CarouselBootstrap.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CarouselBootstrap.Caption>
      </CarouselBootstrap.Item>
      <CarouselBootstrap.Item>
      <img
          className="d-block w-100 img-fluid"
          src={foto3}
          alt="Third slide"
        />
        <CarouselBootstrap.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </CarouselBootstrap.Caption>
      </CarouselBootstrap.Item>
    </CarouselBootstrap>
  );
};
          

export default Carousel;