const ClienteModel = require('../models/cliente.model');

// Obtener todos los clientes
const getClientes = (req, res) => {
  ClienteModel.obtenerClientes((err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// Obtener un cliente por ID
const getClienteById = (req, res) => {
  ClienteModel.obtenerClientePorId(req.params.id, (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(row);
  });
};

// Crear un nuevo cliente
const createCliente = (req, res) => {
  const { nombre, documento_identidad, direccion, telefono } = req.body;
  
  // Validaciones
  if (!nombre || !documento_identidad) {
    return res.status(400).json({ mensaje: 'Nombre y documento de identidad son requeridos' });
  }
  
  ClienteModel.crearCliente(req.body, function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ error: 'El documento de identidad ya está registrado' });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ 
      mensaje: 'Cliente creado', 
      id: this.lastID,
      nombre,
      documento_identidad,
      direccion,
      telefono
    });
  });
};

// Actualizar cliente
const updateCliente = (req, res) => {
  ClienteModel.actualizarCliente(req.params.id, req.body, function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ error: 'El documento de identidad ya está registrado' });
      }
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json({ mensaje: 'Cliente actualizado' });
  });
};

// Eliminar cliente
const deleteCliente = (req, res) => {
  ClienteModel.eliminarCliente(req.params.id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json({ mensaje: 'Cliente eliminado' });
  });
};

module.exports = {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
};