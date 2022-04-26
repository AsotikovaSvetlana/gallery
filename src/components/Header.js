import React from "react";
import { Navbar, Container, Offcanvas, Nav, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import '../styles/header.css';
import AuthorInfo from "./AuthorInfo";
import { selectTheme } from "../redux/actions/actionCreators";

const Header = () => {
  const { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const radios = [
    { name: 'Dark', value: 'dark' },
    { name: 'Light', value: 'light' },
  ];

  const handleChangeTheme = (e) => {
    dispatch(selectTheme(e.currentTarget.value));
  }

  return (
    <>
      <header className="header">
        <Navbar collapseOnSelect expand={false}>
          <Container fluid className="justify-content-end align-items-center">
            <ButtonGroup className="theme-select">
              {radios.map(radio => (
                <ToggleButton
                  key={radio.value}
                  id={radio.value}
                  type="radio"
                  name="radio"
                  value={radio.value}
                  checked={theme === radio.value}
                  onChange={handleChangeTheme}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
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