import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand href="/">
          LA PIZZADA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about" className="nav-link"> Nosotros</Nav.Link>
            <Nav.Link href="galeria" className="nav-link"> Galería</Nav.Link>
            <Nav.Link href="locals" className="nav-link"> Locales</Nav.Link>
            <Nav.Link href="reviews" className="nav-link"> Reseñas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default NavBar;