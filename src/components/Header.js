import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/header.css';
import AuthorInfo from "./AuthorInfo";

const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar collapseOnSelect expand={false}>
          <Container fluid className="justify-content-end">
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <AuthorInfo />
                <Nav className="justify-content-end flex-grow-1 p-0 modal-menu mt-5">
                  <Nav.Link as={Link} to="/" className="m-auto" eventKey="1">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" className="m-auto" eventKey="2">About</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header;