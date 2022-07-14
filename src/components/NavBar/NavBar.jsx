import logo from '../../imagenes/iconos/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src= {logo} alt="logo" width="90" height="90"
                        className=" m-2 d-inline-block align-text-center"/> ECommerce
                </a>
                <ul className="nav">
                    <li className="nav-item">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ">
                                    <li><a className="nav-link m-3 text-muted" aria-current="page" href="#disenos">Inicio</a></li>
                                    <li><a className="nav-link m-3 text-muted" href="./paginas/carrito.html">Productos</a></li>
                                    <li><a className="nav-link m-3 text-muted" href="#contacto">Contacto</a></li>
                                    <li><a className="nav-link m-3 text-muted" href="#contacto">Preguntas Frecuentes</a></li>
                                </ul>
                                <CartWidget />
                            </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar