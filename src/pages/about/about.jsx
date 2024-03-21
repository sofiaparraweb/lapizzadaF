import React from 'react';
import './about.css';
import AboutChef1 from '../../assets/porcion.jpg';
import AboutChef2 from '../../assets/calzon.jpg';
import { ImageGallery } from '../../components/ImageGallery';
import { Reviews } from '../../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>SOBRE NOSOTROS</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p> La Pizzada es una empresa familiar con más de 20 años de experiencia en la
        elaboración de productos de panadería y pastelería artesanal. Nuestros
        productos son elaborados con ingredientes de alta calidad y sin conservantes, lo
        que nos distingue de otras empresas del sector.
     </p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p> Ofrecemos una amplia variedad de productos, desde panes y facturas hasta pasteles y
        tortas, todos elaborados con el mismo cuidado y dedicación que ponemos en cada
        uno de nuestros productos.</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;