const db = require('../db/connection');

// Obtener todos los usuarios
const obtenerUsuarios = (callback) => {
  db.all('SELECT * FROM usuarios', [], callback);
};

// Obtener un usuario por ID
const obtenerUsuarioPorId = (id, callback) => {
  db.get('SELECT * FROM usuarios WHERE id = ?', [id], callback);
};

// Crear un nuevo usuario
const crearUsuario = (datos, callback) => {
  const { nombre, email, password } = datos;
  db.run(
    'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
    [nombre, email, password],
    callback
  );
};

// Actualizar usuario
const actualizarUsuario = (id, datos, callback) => {
  const { nombre, email, password } = datos;
  db.run(
    'UPDATE usuarios SET nombre = ?, email = ?, password = ? WHERE id = ?',
    [nombre, email, password, id],
    callback
  );
};

// Eliminar usuario
const eliminarUsuario = (id, callback) => {
  db.run('DELETE FROM usuarios WHERE id = ?', [id], callback);
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};