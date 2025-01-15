import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css'; // Include CSS for styling

function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (role === 'host') {
      navigate('/login'); // Navigate to the Host Login page
    } else if (role === 'user') {
      navigate('/user-login'); // Navigate to the User Login page
    }
  };

  return (
    <div className="role-selection-container">
      <div className="role-selection-content">
        <h1>Choose Your Role</h1>
        <button onClick={() => handleRoleSelect('host')} className="role-button">
          Host
        </button>
        <button onClick={() => handleRoleSelect('user')} className="role-button">
          User
        </button>
      </div>
    </div>
  );
}

export default RoleSelection;
