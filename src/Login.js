// LoginSignup.js
import React, { useState } from 'react';
import './App.css';

const LoginSignup = () => {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleModeChange = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here, e.g., using Firebase or your backend API
    console.log(`Email: ${email}, Password: ${password}, Mode: ${mode}`);
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-signup-container">
      <h1>{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
      <p onClick={handleModeChange}>{mode === 'login' ? 'Switch to Sign Up' : 'Switch to Login'}</p>
    </div>
  );
};

export default LoginSignup;
