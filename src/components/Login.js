// src/components/Login.js
import { signIn } from '@aws-amplify/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    const payload = { username: email, password };
    console.log('Login attempt with:', payload);
    try {
      const response = await signIn(payload);
      console.log('Login response:', response);
      if (response.isSignedIn) {
        onLogin(); // Only proceed if signed in
      } else if (response.nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        console.log('User not confirmed, redirecting to confirm page for:', email);
        navigate('/confirm', { state: { email } });
      } else {
        alert('Login incomplete: ' + (response.nextStep.signInStep || 'Unknown step'));
      }
    } catch (error) {
      console.error('Login failed - Full error:', JSON.stringify(error, null, 2));
      if (error.code === 'UserNotConfirmedException') {
        console.log('Redirecting to confirm page for:', email);
        navigate('/confirm', { state: { email } });
      } else {
        alert('Login failed: ' + (error.code ? `${error.code}: ${error.message}` : JSON.stringify(error)));
      }
    }
  };

  return (
    <div className="login">
      <h1 className="login-logo">Instagram</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;