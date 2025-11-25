# Sistema de Ventas - Full Stack

Proyecto de desarrollo full stack con JavaScript, Express, React y SQLite.

## 👥 Integrantes del Grupo

- **Kevin Peralta** - Repositorio inicial y creacion del repositorio
- **Diego Ninancuro** - Models
- **Lino Huaracallo** - Controllers
- **Jose Manuel Bustinza** - Routers

## 🚀 Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- SQLite3
- CORS

### Frontend
- React
- Vite
- Axios

## 📋 Requisitos Previos

- Node.js v16 o superior
- npm v8 o superior

## 🔧 Instalación

### Backend

```bash
cd backend
npm install
node index.js
```

El servidor se ejecutará en: `http://localhost:3001`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend se ejecutará en: `http://localhost:5173`

## 📚 Endpoints de la API

### Productos
- `GET /api/productos` - Obtener todos los productos
- `GET /api/productos/:id` - Obtener un producto por ID
- `POST /api/productos` - Crear un nuevo producto
- `PUT /api/productos/:id` - Actualizar un producto
- `DELETE /api/productos/:id` - Eliminar un producto

### Usuarios
- `GET /api/usuarios` - Obtener todos los usuarios
- `GET /api/usuarios/:id` - Obtener un usuario por ID
- `POST /api/usuarios` - Crear un nuevo usuario
- `PUT /api/usuarios/:id` - Actualizar un usuario
- `DELETE /api/usuarios/:id` - Eliminar un usuario

### Clientes
- `GET /api/clientes` - Obtener todos los clientes
- `GET /api/clientes/:id` - Obtener un cliente por ID
- `POST /api/clientes` - Crear un nuevo cliente
- `PUT /api/clientes/:id` - Actualizar un cliente
- `DELETE /api/clientes/:id` - Eliminar un cliente

## 🧪 Pruebas con Postman

### Crear Producto
```json
POST http://localhost:3001/api/productos
{
  "nombre": "Laptop Lenovo",
  "precio": 3200.50,
  "stock": 10
}
```

### Crear Usuario
```json
POST http://localhost:3001/api/usuarios
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456"
}
```

### Crear Cliente
```json
POST http://localhost:3001/api/clientes
{
  "nombre": "María García",
  "documento_identidad": "12345678",
  "direccion": "Av. Principal 123",
  "telefono": "987654321"
}
```

## 📊 Base de Datos

El proyecto utiliza SQLite con las siguientes tablas:

- **productos**: id, nombre, precio, stock
- **usuarios**: id, nombre, email, password
- **clientes**: id, nombre, documento_identidad, direccion, telefono
- **ventas**: id, cliente_id, usuario_id, fecha, total
- **detalle_ventas**: id, venta_id, producto_id, cantidad, precio_unitario, subtotal

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es parte del curso de Desarrollo de Software I - UNSAAC

## 📧 Contacto

Universidad Nacional de San Antonio Abad del Cusco
Departamento Académico de Ingeniería Informática y de Sistemas
