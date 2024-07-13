import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import Login from './Login';
import Navbar from './Navbar';
import Status from './Status';  
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/status" element={<Status />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
