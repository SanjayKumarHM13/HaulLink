import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CreateProfile.css';

function CreateProfile() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          password,
          name: location.state.name,
          email: location.state.email,
          phone: location.state.phone,
        }),
      });
      if (response.ok) {
        alert('Profile created successfully!');
        navigate(`/profile/${userId}`);
      } else {
        alert('Error creating profile. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="create-profile">
      <h2>Create Your Profile</h2>
      <p>Your User ID is: {userId}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">Set Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Create Profile</button>
      </form>
    </div>
  );
}

export default CreateProfile;