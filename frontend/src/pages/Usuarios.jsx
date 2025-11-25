import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { getUsuarios, createUsuario, updateUsuario, deleteUsuario } from '../services/api';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUsuario, setCurrentUsuario] = useState({
    nombre: '',
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const data = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      showAlert('Error al cargar usuarios', 'danger');
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const handleShowModal = (usuario = null) => {
    if (usuario) {
      setCurrentUsuario({ ...usuario, password: '' });
      setEditMode(true);
    } else {
      setCurrentUsuario({ nombre: '', email: '', password: '' });
      setEditMode(false);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentUsuario({ nombre: '', email: '', password: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await updateUsuario(currentUsuario.id, currentUsuario);
        showAlert('Usuario actualizado correctamente', 'success');
      } else {
        await createUsuario(currentUsuario);
        showAlert('Usuario creado correctamente', 'success');
      }
      cargarUsuarios();
      handleCloseModal();
    } catch (error) {
      showAlert('Error al guardar el usuario', 'danger');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este usuario?')) {
      try {
        await deleteUsuario(id);
        showAlert('Usuario eliminado correctamente', 'success');
        cargarUsuarios();
      } catch (error) {
        showAlert('Error al eliminar el usuario', 'danger');
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestión de Usuarios</h1>
        <Button variant="info" onClick={() => handleShowModal()}>
          + Nuevo Usuario
        </Button>
      </div>

      {alert && <Alert variant={alert.type}>{alert.message}</Alert>}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShowModal(usuario)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(usuario.id)}
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
          <Modal.Title>{editMode ? 'Editar Usuario' : 'Nuevo Usuario'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={currentUsuario.nombre}
                onChange={(e) => setCurrentUsuario({ ...currentUsuario, nombre: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={currentUsuario.email}
                onChange={(e) => setCurrentUsuario({ ...currentUsuario, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña {editMode && '(dejar vacío para mantener)'}</Form.Label>
              <Form.Control
                type="password"
                value={currentUsuario.password}
                onChange={(e) => setCurrentUsuario({ ...currentUsuario, password: e.target.value })}
                required={!editMode}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button variant="info" type="submit">
              {editMode ? 'Actualizar' : 'Guardar'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Usuarios;