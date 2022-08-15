import {Link, NavLink} from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'
import { useCartContext } from "../../Context/CartContext";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../imagenes/iconos/logo.png'


const NavBar = () => {

    const { amountOfProds } = useCartContext()

    return (
    <Navbar bg="pink" expand="lg" sticky="top">
        <Container>
            <Link to="/">
                <Navbar.Brand className="brand">
                    <img src= {logo} alt="logo" width="90" height="90" className=" m-2 d-inline-block align-text-center"/> ECommerce
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='navBar'>
                <Nav>
                    <NavLink to="/" className="nav-link m-4 text-muted">Inicio</NavLink>
                    <NavLink to="/categoria/Sticker" className="nav-link m-4 text-muted">Stickers</NavLink>
                    <NavLink to="/categoria/Cuadro" className="nav-link m-4 text-muted">Cuadros</NavLink>
                    <Link to="/cart"> <CartWidget /> { amountOfProds() != 0 &&
                    `${amountOfProds()} en Carrito`                  
                    }</Link> 
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar