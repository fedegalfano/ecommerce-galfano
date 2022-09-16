import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>Fechu Camisetas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>INICIO</Nav.Link>
            <Nav.Link as={Link} to='/categoria/argentina'>ARGENTINA</Nav.Link>
            <Nav.Link as={Link} to='/categoria/europa'>EUROPA</Nav.Link>
          </Nav>
        </Container>
        <Container className="justify-content-end">
          <Navbar.Brand to='/'>
            <img
              src="/palma.png"
              width="30"
              height="30"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <NavLink to='/cart'>
            <CartWidget/>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;