import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container fluid>
        <BSNavbar.Brand as={Link} to="/dashboard">
          🛒 Sistema de Ventas
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/clientes">
              Clientes
            </Nav.Link>
            <Nav.Link as={Link} to="/usuarios">
              Usuarios
            </Nav.Link>
            <Nav.Link as={Link} to="/ventas">
              Ventas
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-danger">
              Salir
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;