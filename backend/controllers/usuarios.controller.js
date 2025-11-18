const UsuarioModel = require('../models/usuario.model');

// Obtener todos los usuarios
const getUsuarios = (req, res) => {
  UsuarioModel.obtenerUsuarios((err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// Obtener un usuario por ID
const getUsuarioById = (req, res) => {
  UsuarioModel.obtenerUsuarioPorId(req.params.id, (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(row);
  });
};

// Crear un nuevo usuario
const createUsuario = (req, res) => {
  const { nombre, email, password } = req.body;
  
  // Validaciones
  if (!nombre || !email || !password) {
    return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
  }
  
  // Validación básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ mensaje: 'Email inválido' });
  }
  
  UsuarioModel.crearUsuario(req.body, function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ error: 'El email ya está registrado' });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ 
      mensaje: 'Usuario creado', 
      id: this.lastID,
      nombre,
      email
    });
  });
};

// Actualizar usuario
const updateUsuario = (req, res) => {
  UsuarioModel.actualizarUsuario(req.params.id, req.body, function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ error: 'El email ya está registrado' });
      }
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json({ mensaje: 'Usuario actualizado' });
  });
};

// Eliminar usuario
const deleteUsuario = (req, res) => {
  UsuarioModel.eliminarUsuario(req.params.id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json({ mensaje: 'Usuario eliminado' });
  });
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};