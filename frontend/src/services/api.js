const API_URL = 'httplocalhost3001api';

 ========== PRODUCTOS ==========
export const getProductos = async () = {
  const response = await fetch(`${API_URL}productos`);
  return response.json();
};

export const getProductoById = async (id) = {
  const response = await fetch(`${API_URL}productos${id}`);
  return response.json();
};

export const createProducto = async (producto) = {
  const response = await fetch(`${API_URL}productos`, {
    method 'POST',
    headers { 'Content-Type' 'applicationjson' },
    body JSON.stringify(producto),
  });
  return response.json();
};

export const updateProducto = async (id, producto) = {
  const response = await fetch(`${API_URL}productos${id}`, {
    method 'PUT',
    headers { 'Content-Type' 'applicationjson' },
    body JSON.stringify(producto),
  });
  return response.json();
};

export const deleteProducto = async (id) = {
  const response = await fetch(`${API_URL}productos${id}`, {
    method 'DELETE',
  });
  return response.json();
};

 ========== USUARIOS ==========
export const getUsuarios = async () = {
  const response = await fetch(`${API_URL}usuarios`);
  return response.json();
};

export const createUsuario = async (usuario) = {
  const response = await fetch(`${API_URL}usuarios`, {
    method 'POST',
    headers { 'Content-Type' 'applicationjson' },
    body JSON.stringify(usuario),
  });
  return response.json();
};

export const updateUsuario = async (id, usuario) = {
  const response = await fetch(`${API_URL}usuarios${id}`, {
    method 'PUT',
    headers { 'Content-Type' 'applicationjson' },
    body JSON.stringify(usuario),
  });
  return response.json();
};

export const deleteUsuario = async (id) = {
  const response = await fetch(`${API_URL}usuarios${id}`, {
    method 'DELETE',
  });
  return response.json();
};

 ========== CLIENTES ==========
export const getClientes = async () = {
  const response = await fetch(`${API_URL}clientes`);
  return response.json();
};

export const createCliente = async (cliente) = {
  const response = await fetch(`${API_URL}clientes`, {
    method 'POST',
    headers { 'Content-Type' 'applicationjson' },
    body JSON.stringify(cliente),
  });
  return response.json();
};

export const updateCliente = async (id, cliente) = {
  const response = await fetch(`${API_URL}clientes${id}`, {
    method 'PUT',
    headers { 'Content-Type' 'applicationjson' },
    body JSON.stringify(cliente),
  });
  return response.json();
};

export const deleteCliente = async (id) = {
  const response = await fetch(`${API_URL}clientes${id}`, {
    method 'DELETE',
  });
  return response.json();
};