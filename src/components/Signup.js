// src/components/Signup.js
import { signUp } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this
import { userByUsername } from '../graphql/queries';
import './Signup.css';

const client = generateClient();

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate(); // Add this

  const checkEmail = async (value) => {
    setEmail(value);
    try {
      const { data } = await client.graphql({ query: userByUsername, variables: { username: value } });
      setUserExists(!!data.userByUsername);
    } catch (error) {
      setUserExists(false);
    }
  };

  const handleSignup = async () => {
    if (userExists) {
      alert('Email already taken');
      return;
    }
    try {
      const response = await signUp({
        username: email,
        password,
        attributes: { email }
      });
      console.log('Signup response:', response);
      alert('Signup successful! Please check your email for a verification code.');
      navigate('/confirm', { state: { email } }); // Redirect to confirm page
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed: ' + error.message);
    }
  };

  return (
    <div className="signup">
      <h1 className="signup-logo">Instagram</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => checkEmail(e.target.value)}
      />
      {userExists && <p className="error">Email already taken</p>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;