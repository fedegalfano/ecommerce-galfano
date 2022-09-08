import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>Fechu Camisetas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/categoria/argentina">ARGENTINA</Nav.Link>
            <Nav.Link href="/categoria/europa">EUROPA</Nav.Link>
          </Nav>
        </Container>
        <Container className="justify-content-end">
          <Navbar.Brand href="#home">
            <img
              src="/palma.png"
              width="30"
              height="30"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav.Link href="/cart">
            <CartWidget/>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;