import React from "react";
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import '../styles/header.css';
import AuthorInfo from "./AuthorInfo";

const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar expand={false}>
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
                  <Nav.Link href="/" className="m-auto">Home</Nav.Link>
                  <Nav.Link href="/about" className="m-auto">About</Nav.Link>
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