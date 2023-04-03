import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'Bearer');
      alert('usted a iniciado sesion');
      // redirigir a la siguiente pantalla
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  };

  return (
    <form className="container mt-7" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Usuario:</label>
        <input type="text" className="form-control" id="username" placeholder="Ingresa tu usuario" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary ">Iniciar sesión</button>
    </form>
  );
}

export default Login;
