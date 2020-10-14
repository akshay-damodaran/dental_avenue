import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

function Navbar() {
  return (
    <div className='container' >
      <Link to="/">Home</Link>
      <Link to="/doctor">Doctor</Link>
    </div>
  );
}

export default Navbar;
