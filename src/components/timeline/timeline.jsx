import React, { useEffect, useRef } from 'react';
import './timeline.css';
import $ from 'jquery';
import foto2013 from '../../assets/NAPO.jpg';
import foto2018 from '../../assets/PIZZASOMBRA.jpg';
import foto2022 from '../../assets/PAPAS.webp';
import foto2023 from '../../assets/QUESO.jpg';

const Timeline = () => {
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = $(window).scrollTop();
      itemRefs.current.forEach((item, index) => {
        if (item) {
          const topOffset = $(item).offset().top;
          const height = $(item).outerHeight();
if (scrollTop > topOffset - height / 2 && scrollTop < topOffset + height) {
            $(item).addClass('active');
            const imgSrc = $(item).find('.timeline__img').attr('src');
            $(timelineRef.current).css('background-image', `url(${imgSrc})`);
          } else {
            $(item).removeClass('active');
          }
        }
      });
    };

    $(window).on('scroll', handleScroll);

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="timeline-container" id="timeline-1" ref={timelineRef}>
        <div className="timeline-header">
          <h2 className="timeline-header__title">NUESTRA HISTORIA</h2>
          <h3 className="timeline-header__subtitle">LA GRUTA</h3>
        </div>
        <div className="timeline">
          <div className="timeline-item" ref={el => itemRefs.current[0] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src={foto2013} alt="La Gruta 1923" />
              </div>
              <h2 className="timeline__content-title">2013</h2>
              <p className="timeline__content-desc">Alianza con el banco de alimentos. El proyecto toma forma y nace LA GRUTA como fundación independiente</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[1] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src={foto2018} alt="La Gruta 1923" />
              </div>
              <h2 className="timeline__content-title">2018</h2>
              <p className="timeline__content-desc">Separación de roles: comisión directiva y asamblea. Esta ultima viene a renovar la mirada en búsqueda de un objetivo global</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[2] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src={foto2022} alt="La Gruta 1923" />
              </div>
              <h2 className="timeline__content-title">2022</h2>
              <p className="timeline__content-desc">camino hacia un proyecto comunitario, dejamos de ser "el comedor" para buscar herramientas profesionales que sustenten el trabajo del barrio</p>
            </div>
          </div>
          <div className="timeline-item" ref={el => itemRefs.current[3] = el}>
            <div className="timeline__content">
              <div className="timeline__img-container">
                <img className="timeline__img" src={foto2023} alt="La Gruta 1923" />
              </div>
              <h2 className="timeline__content-title">2023</h2>
              <p className="timeline__content-desc">LA GRUTA busca lograr un crecimeinto integral de los vecinos, no solo brindando a la comunidad, sino creando junto a ella </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;