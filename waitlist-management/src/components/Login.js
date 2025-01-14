import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setCurrentUser }) {
  const [orgId, setOrgId] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    setCurrentUser({ orgId, role: 'host' }); // This should now work because setCurrentUser is passed as a prop
    navigate('/host-dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Organization ID"
        value={orgId}
        onChange={(e) => setOrgId(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
