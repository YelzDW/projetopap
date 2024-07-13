import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        console.log('Fetched users:', response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();
    
    console.log('Users:', users);
    console.log('Input:', { name: trimmedName, password: trimmedPassword });

    const user = users.find(
      (user) => user.name === trimmedName && user.password === trimmedPassword
    );

    if (user) {
      navigate('/Status');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
