import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="role-selection">
      <h1>Choose Your Role</h1>
      <button onClick={() => handleRoleSelect('host')}>Host</button>
      <button onClick={() => handleRoleSelect('user')}>User</button>
    </div>
  );
}

export default RoleSelection;