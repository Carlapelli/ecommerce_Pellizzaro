import logo from '../../imagenes/iconos/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
    <Navbar bg="pink" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                            <img src= {logo} alt="logo" width="90" height="90" className=" m-2 d-inline-block align-text-center"/> ECommerce
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='navBar'>
                <Nav>
                    <Nav.Link className="nav-link m-4 text-muted" href="#inicio">Inicio</Nav.Link>
                    <Nav.Link className="nav-link m-4 text-muted" href="#productos">Productos</Nav.Link>
                    <Nav.Link className="nav-link m-4 text-muted" href="#contacto">Contacto</Nav.Link>
                    <CartWidget />
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar