import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from '../CarWidget/CarWidget';
import "../../../screens/Home/Home.css";
import {Link} from 'react-router-dom';

function NavBarNew() {
  return (
    <div className="navBar">
      <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/category/bmw'}>BMW</Link>
            <Link to={'/category/mercedes'}>MERCEDES</Link>
            <Link to={'/category/chevrolet'}>CHEVROLET</Link>
            <Link to={'/category/toyota'}>TOYOTA</Link>
            <Link to={'/category/volkswagen'}>VOLKSWAGEN</Link>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  );
}
export default NavBarNew;