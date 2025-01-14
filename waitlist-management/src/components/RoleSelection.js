import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css'; // We'll add some CSS for the role selection

function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    if (role === 'host') {
      navigate('/login');
    } else {
      navigate('/user-dashboard');
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
