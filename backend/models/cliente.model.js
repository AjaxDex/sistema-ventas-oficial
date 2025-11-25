const db = require('../db/connection');

// Obtener todos los clientes
const obtenerClientes = (callback) => {
  db.all('SELECT * FROM clientes', [], callback);
};

// Obtener un cliente por ID
const obtenerClientePorId = (id, callback) => {
  db.get('SELECT * FROM clientes WHERE id = ?', [id], callback);
};

// Crear un nuevo cliente
const crearCliente = (datos, callback) => {
  const { nombre, documento_identidad, direccion, telefono } = datos;
  db.run(
    'INSERT INTO clientes (nombre, documento_identidad, direccion, telefono) VALUES (?, ?, ?, ?)',
    [nombre, documento_identidad, direccion, telefono],
    callback
  );
};

// Actualizar cliente
const actualizarCliente = (id, datos, callback) => {
  const { nombre, documento_identidad, direccion, telefono } = datos;
  db.run(
    'UPDATE clientes SET nombre = ?, documento_identidad = ?, direccion = ?, telefono = ? WHERE id = ?',
    [nombre, documento_identidad, direccion, telefono, id],
    callback
  );
};

// Eliminar cliente
const eliminarCliente = (id, callback) => {
  db.run('DELETE FROM clientes WHERE id = ?', [id], callback);
};

module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};