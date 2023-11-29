import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ForgotPassword.css';

const ForgotPassword = ({ setEmail }) => {
  const [email, setForgotEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const sendCode = async () => {
    try {
      const response = await axios.post('http://localhost:3001/forgot-password', { email });
      if (response.data.success) {
        toast.success('Code sent to your email. Please check your inbox.');
      } else {
        toast.error('Email not found. Please enter a valid email.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const verifyCode = async () => {
    try {
      const response = await axios.post('http://localhost:3001/verify-code', { email, code });
      if (response.data.success) {
        toast.success('Code verified. Enter your new password.');
        // Pass the email back to the parent component
        setEmail(email);
      } else {
        toast.error(response.data.error || 'Incorrect code. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error verifying code. Please try again.');
    }
  };

  const updatePassword = async () => {
    try {
      const response = await axios.post('http://localhost:3001/update-password', {
        email,
        newPassword,
      });
      if (response.data.success) {
        toast.success('Password updated successfully. You can now log in with your new password.');
        // Navigate back to the login page after updating the password
        navigate('/login');
      } else {
        toast.error(response.data.error || 'Password update failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error updating password. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setForgotEmail(e.target.value)}
        />
        <button className="action-button" onClick={sendCode}>
          Send Code
        </button>
      </div>
      {email && (
        <div className="form-group">
          <label>Verification Code:</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="action-button" onClick={verifyCode}>
            Verify Code
          </button>
        </div>
      )}
      {email && code && (
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="action-button" onClick={updatePassword}>
            Update Password
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
