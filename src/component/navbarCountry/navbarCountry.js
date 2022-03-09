import React from 'react';
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { MappingCountry } from '../mappingCountry';
import {Favoris} from '../favoris'


const NavbarCountry = () => {
    return (
        <BrowserRouter>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">All countries</Nav.Link>
                <Nav.Link href="/favoris">Favorites</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Routes>
                <Route exact path="/" element={<MappingCountry />} />
                <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </BrowserRouter>
    );
}

export default NavbarCountry;
