// src/components/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '@aws-amplify/auth';
import './Login.css';
import instaLogo from '../assets/instagram-logo.png'; // Add the logo

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signIn({ username: formData.username, password: formData.password });
      onLogin();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="login-container">
        <img src={instaLogo} alt="Instagram Logo" className="insta-logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
