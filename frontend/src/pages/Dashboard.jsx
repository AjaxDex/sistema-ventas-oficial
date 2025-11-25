import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1 className="mb-4">Bienvenido al Sistema de Ventas</h1>
      <p className="lead">Selecciona una opción para comenzar:</p>
      
      <Row className="g-4 mt-4">
        <Col md={6} lg={3}>
          <Card className="h-100 shadow-sm border-primary">
            <Card.Body className="text-center">
              <div className="display-4 text-primary mb-3">📦</div>
              <Card.Title>Productos</Card.Title>
              <Card.Text>
                Gestiona el inventario de productos
              </Card.Text>
              <Link to="/productos" className="btn btn-primary">
                Ir a Productos
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 shadow-sm border-success">
            <Card.Body className="text-center">
              <div className="display-4 text-success mb-3">👥</div>
              <Card.Title>Clientes</Card.Title>
              <Card.Text>
                Administra la base de clientes
              </Card.Text>
              <Link to="/clientes" className="btn btn-success">
                Ir a Clientes
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 shadow-sm border-info">
            <Card.Body className="text-center">
              <div className="display-4 text-info mb-3">👤</div>
              <Card.Title>Usuarios</Card.Title>
              <Card.Text>
                Gestiona usuarios del sistema
              </Card.Text>
              <Link to="/usuarios" className="btn btn-info">
                Ir a Usuarios
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 shadow-sm border-warning">
            <Card.Body className="text-center">
              <div className="display-4 text-warning mb-3">🛒</div>
              <Card.Title>Ventas</Card.Title>
              <Card.Text>
                Registra nuevas ventas
              </Card.Text>
              <Link to="/ventas" className="btn btn-warning">
                Ir a Ventas
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;