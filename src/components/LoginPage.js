// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate password length
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // Here you can add code to handle login, such as sending a request to your backend
    console.log('Login data:', { email, password });
    setLoginSuccess(true);
    setEmail('');
    setPassword('');
  };

  return (
    

    
    <div className="login-container">
      <h2>Login</h2>
      {loginSuccess ? (
        <>
          <p className="success-message">Login successful!</p>
          <Link to="/register">Register</Link>
        </>
      ) : (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Login" />
          <p>Don't have an account?Register Here!</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
)}
    </div>
    
  );
};

export default LoginPage;