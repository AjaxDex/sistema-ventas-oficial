const ProductoModel = require('../models/producto.model');

// Obtener todos los productos
const getProductos = (req, res) => {
  ProductoModel.obtenerProductos((err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// Obtener un producto por ID
const getProductoById = (req, res) => {
  ProductoModel.obtenerProductoPorId(req.params.id, (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(row);
  });
};

// Crear un nuevo producto
const createProducto = (req, res) => {
  const { nombre, precio, stock } = req.body;
  
  // Validaciones
  if (!nombre || !precio || !stock) {
    return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
  }
  
  ProductoModel.crearProducto(req.body, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ 
      mensaje: 'Producto creado', 
      id: this.lastID,
      nombre,
      precio,
      stock
    });
  });
};

// Actualizar producto
const updateProducto = (req, res) => {
  ProductoModel.actualizarProducto(req.params.id, req.body, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json({ mensaje: 'Producto actualizado' });
  });
};

// Eliminar producto
const deleteProducto = (req, res) => {
  ProductoModel.eliminarProducto(req.params.id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json({ mensaje: 'Producto eliminado' });
  });
};

module.exports = {
  getProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
};