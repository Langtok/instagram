import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmSignUp } from '@aws-amplify/auth';
import './Confirm.css';

const Confirm = ({ onConfirm }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await confirmSignUp(email, code);
      onConfirm();
      navigate('/');
    } catch (err) {
      setError(err.message || 'Invalid code.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-right">
        <div className="confirm-box">
          <h1>Instagram</h1>
          {error && <p className="error">{error}</p>}
          <p>Enter the confirmation code sent to {email}</p>
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
      </div>
    </div>
  );
};

export default Confirm;
