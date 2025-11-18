const db = require('../db/connection');

// Obtener todos los productos
const obtenerProductos = (callback) => {
  db.all('SELECT * FROM productos', [], callback);
};

// Obtener un producto por ID
const obtenerProductoPorId = (id, callback) => {
  db.get('SELECT * FROM productos WHERE id = ?', [id], callback);
};

// Crear un nuevo producto
const crearProducto = (datos, callback) => {
  const { nombre, precio, stock } = datos;
  db.run(
    'INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)',
    [nombre, precio, stock],
    callback
  );
};

// Actualizar producto
const actualizarProducto = (id, datos, callback) => {
  const { nombre, precio, stock } = datos;
  db.run(
    'UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?',
    [nombre, precio, stock, id],
    callback
  );
};

// Eliminar producto
const eliminarProducto = (id, callback) => {
  db.run('DELETE FROM productos WHERE id = ?', [id], callback);
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};