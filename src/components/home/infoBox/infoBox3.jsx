import React from 'react';
import styled from 'styled-components';

const InfoBoxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://via.placeholder.com/1200x800?text=Image");
    background-size: cover;
    filter: brightness(50%);
    z-index: 0;
  }
`;

const InfoBox3 = () => {
  return (
    <InfoBoxContainer>
      <h2>Título de la caja de información</h2>
      <p>Descripción de la caja de información</p>
    </InfoBoxContainer>
  );
};

export default InfoBox3;