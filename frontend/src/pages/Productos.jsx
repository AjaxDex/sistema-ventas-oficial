import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { getProductos, createProducto, updateProducto, deleteProducto } from '../services/api';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentProducto, setCurrentProducto] = useState({ nombre: '', precio: '', stock: '' });
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const data = await getProductos();
      setProductos(data);
    } catch (error) {
      showAlert('Error al cargar productos', 'danger');
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const handleShowModal = (producto = null) => {
    if (producto) {
      setCurrentProducto(producto);
      setEditMode(true);
    } else {
      setCurrentProducto({ nombre: '', precio: '', stock: '' });
      setEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProducto({ nombre: '', precio: '', stock: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await updateProducto(currentProducto.id, currentProducto);
        showAlert('Producto actualizado correctamente', 'success');
      } else {
        await createProducto(currentProducto);
        showAlert('Producto creado correctamente', 'success');
      }
      cargarProductos();
      handleCloseModal();
    } catch (error) {
      showAlert('Error al guardar el producto', 'danger');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await deleteProducto(id);
        showAlert('Producto eliminado correctamente', 'success');
        cargarProductos();
      } catch (error) {
        showAlert('Error al eliminar el producto', 'danger');
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestión de Productos</h1>
        <Button variant="primary" onClick={() => handleShowModal()}>
          + Nuevo Producto
        </Button>
      </div>

      {alert && <Alert variant={alert.type}>{alert.message}</Alert>}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>S/. {producto.precio}</td>
              <td>{producto.stock}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShowModal(producto)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(producto.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Editar Producto' : 'Nuevo Producto'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={currentProducto.nombre}
                onChange={(e) => setCurrentProducto({ ...currentProducto, nombre: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={currentProducto.precio}
                onChange={(e) => setCurrentProducto({ ...currentProducto, precio: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={currentProducto.stock}
                onChange={(e) => setCurrentProducto({ ...currentProducto, stock: e.target.value })}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              {editMode ? 'Actualizar' : 'Guardar'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Productos;