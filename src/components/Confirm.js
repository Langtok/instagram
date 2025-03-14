// src/components/Confirm.js
import { useState } from 'react';
import { confirmSignUp, resendSignUpCode } from '@aws-amplify/auth';
import './Confirm.css'; // Create this file for styling

const Confirm = ({ email, onConfirm }) => {
  const [code, setCode] = useState('');

  const handleConfirm = async () => {
    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      alert('Account confirmed successfully!');
      onConfirm(); // Trigger login or redirect
    } catch (error) {
      console.error('Confirmation failed:', error);
      alert('Confirmation failed: ' + (error.message || 'Unknown error'));
    }
  };

  const handleResendCode = async () => {
    try {
      await resendSignUpCode({ username: email });
      alert('A new verification code has been sent to your email.');
    } catch (error) {
      console.error('Resend code failed:', error);
      alert('Failed to resend code: ' + (error.message || 'Unknown error'));
    }
  };

  return (
    <div className="confirm">
      <h1 className="confirm-logo">Instagram</h1>
      <p>Please enter the verification code sent to {email}</p>
      <input
        type="text"
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleResendCode}>Resend Code</button>
    </div>
  );
};

export default Confirm;