import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './CarWidget'; 


function NavBarNew() {
  return (
      <div className="navBar">
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Insert-Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#galery">Galery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#form">Form</Nav.Link>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
  );
}
export default NavBarNew;