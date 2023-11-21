
import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img src='https://thumbs.dreamstime.com/b/doctor-avatar-vector-icon-black-background-hospital-clinic-linear-logo-outline-doctors-symbol-polyclinics-surgeon-orl-90896302.jpg'/>
      <p><em>HOSPITAL <br></br>MANAGEMENT <br></br>SYSTEM</em></p>
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: 'none' ,color : 'white'}}>Home</Link>
        </li>
        <li>
          <Link to="/login" style={{ textDecoration: 'none',color : 'white' }}>Login</Link>
        </li>
        <li>
          <Link to="/Register" style={{ textDecoration: 'none',color : 'white' }}>Register</Link>
        </li>
        <li>
          <Link to="/patients" style={{ textDecoration: 'none' ,color : 'white'}}>Patients record</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
