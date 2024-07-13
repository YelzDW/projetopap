import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="button">
        <span className="transition"></span>
        <span className="gradient"></span>
        <span className="label">HOME</span>
      </Link>
      <Link to="/Info" className="button">
        <span className="transition"></span>
        <span className="gradient"></span>
        <span className="label">INFO</span>
      </Link>
      <Link to="/Login" className="button">
        <span className="transition"></span>
        <span className="gradient"></span>
        <span className="label">LOGIN</span>
      </Link>
    </nav>
  );
};

export default Navbar;
