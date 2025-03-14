// src/components/Confirm.js
import { useState } from 'react';
import { confirmSignUp } from '@aws-amplify/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import './Confirm.css';

const Confirm = ({ onConfirm }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      onConfirm();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="confirm-container">
      <h2>Confirm Signup</h2>
      <p>Enter the code sent to {email}</p>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Confirmation Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Confirm;
