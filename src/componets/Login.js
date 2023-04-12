import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToPosts, setRedirectToPosts] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'Bearer');
      alert('usted a iniciado sesion');
      setRedirectToPosts(true);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  };
  if (redirectToPosts) {
    return <Navigate to="/posts" replace />;
  }
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
