import axios from 'axios';

export function configurarTokenAutorizacion() {
  const token = localStorage.getItem('token');

  if (!token) {
    console.error('Token no encontrado. Redirigiendo a la página de inicio de sesión.');
    // Puedes redirigir o realizar otra acción aquí según tus necesidades
    return null; // Otra opción podría ser lanzar un error o devolver un valor que indique que no hay token
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
}