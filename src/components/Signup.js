import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '@aws-amplify/auth';
import './Signup.css';

const Signup = ({ onSignup }) => {
  const [formData, setFormData] = useState({ email: '', username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signUp({
        username: formData.email,
        password: formData.password,
        attributes: { preferred_username: formData.username }
      });
      onSignup();
      navigate('/confirm', { state: { email: formData.email } });
    } catch (err) {
      setError(err.message || 'Signup failed.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/assets/instagram-mobile.png" alt="Instagram mobile preview" />
      </div>
      <div className="auth-right">
        <div className="signup-box">
          <h1>Instagram</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
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
            <button type="submit">Sign up</button>
          </form>
          <p>By signing up, you agree to our Terms & Privacy Policy.</p>
        </div>
        <div className="login-box">
          Have an account? <Link to="/">Log in</Link>
        </div>

        {/* App Download Section */}
        <div className="get-the-app">
          <p>Get the app.</p>
          <div className="app-buttons">
            <img src={process.env.PUBLIC_URL + "/assets/google-play.png"} alt="Google Play" />
            <img src={process.env.PUBLIC_URL + "/assets/microsoft-store.png"} alt="Microsoft Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
