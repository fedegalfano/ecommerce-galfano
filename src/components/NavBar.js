import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">VachPalm</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#home">NOSOTROS</Nav.Link>
            <Nav.Link href="#home">PRODUCTOS</Nav.Link>
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
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;