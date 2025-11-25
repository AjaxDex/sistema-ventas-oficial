import { Card } from 'react-bootstrap';

function Ventas() {
  return (
    <div>
      <h1 className="mb-4">Registro de Ventas</h1>
      
      <Card className="text-center p-5">
        <Card.Body>
          <div className="display-1 mb-4">🛒</div>
          <h3>Módulo de Ventas</h3>
          <p className="text-muted">
            Esta funcionalidad estará disponible próximamente.
            <br />
            Aquí podrás registrar ventas, seleccionar clientes y productos.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Ventas;