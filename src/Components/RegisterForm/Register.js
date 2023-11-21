import React, { useState } from 'react';
import './Register.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='regist1'>
      <center>
      <h1>REGISTER</h1> 
      <form onSubmit={handleSubmit}>
        <label>
          Full Name<br></br>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <label>
          Age <br></br>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <label>
          Email<br></br>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <label>
          Password<br></br>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <label>
          Confirm Password<br></br>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <button type="submit">Register</button>
      </form>
      </center>
    </div>
  );
};

export default RegisterForm;
