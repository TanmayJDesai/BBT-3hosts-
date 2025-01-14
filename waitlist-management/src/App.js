import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelection from './components/RoleSelection';
import HostDashboard from './components/HostDashboard';
import UserDashboard from './components/UserDashboard';
import Login from './components/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(null); // For tracking the logged-in user
  const [waitlist, setWaitlist] = useState([]); // For managing the waitlist

  // Function to add a customer to the waitlist
  const addToWaitlist = (customer) => {
    setWaitlist([...waitlist, customer]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route 
            path="/host-dashboard" 
            element={<HostDashboard user={currentUser} waitlist={waitlist} />} 
          />
          <Route 
            path="/user-dashboard" 
            element={
              <UserDashboard 
                addToWaitlist={addToWaitlist} 
                waitlist={waitlist} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
