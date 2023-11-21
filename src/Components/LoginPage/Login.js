
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [log , setLog] = useState(' ')
  const handleClick = ()=>{
    setLog("Succesfully Logged In!!")
  }
  const handleLogin = () => {
    onLogin(username);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <center>
        <h1>LOGIN</h1>
        <form>
          <label>
            Username <br></br>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </label>
          <br />
          <br>
          </br>
          <label>
            Password <br></br>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </label>
          <br /><br>
          </br>
          <button type="button" onClick={handleClick} >
            Login
          </button>
          <h2 style={{color:'green'}}>{log}</h2>
        </form>
      </center>
    </div>
  );
};

export default Login;
