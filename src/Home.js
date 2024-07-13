import React from 'react';
import './App.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h2>Bem vindos</h2>
      <p>Já é proprietário de uma "Hortautomatica"?</p>
      <br />
      <p>Sim --- Faça login <a href="./Login" className="link">AQUI</a> para se conectar.</p>
      <br />
      <p>Não --- Adquira <a href="###" className="link">AQUI</a> a sua por apenas 50,00 $.</p>
    </div>
  );
};

export default Home;
