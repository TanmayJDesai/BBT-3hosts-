import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import RoleSelection from './components/RoleSelection';
import HostDashboard from './components/HostDashboard';
import UserDashboard from './components/UserDashboard';
import './App.css'; // Ensure to import the new CSS for general layout styling

function App() {
  const [currentUser, setCurrentUser] = useState(null); // Define setCurrentUser here
  const [waitlist, setWaitlist] = useState([]); // Add state for waitlist

  const addToWaitlist = (customer) => {
    setWaitlist((prevWaitlist) => [...prevWaitlist, customer]); // Update waitlist state
  };

  const removeFromWaitlist = (index) => {
    setWaitlist((prevWaitlist) => prevWaitlist.filter((_, i) => i !== index)); // Remove customer from waitlist
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header with the company title */}
        <header className="app-header">
          <h1>Waitlist Management</h1>
        </header>

        <div className="app-main-content">
          <Routes>
            <Route
              path="/"
              element={<RoleSelection />} // Role selection screen
            />
            <Route
              path="/login"
              element={<Login setCurrentUser={setCurrentUser} />} // Pass setCurrentUser as a prop
            />
            <Route
              path="/host-dashboard"
              element={
                <HostDashboard
                  user={currentUser} // Pass current user to HostDashboard
                  waitlist={waitlist} // Pass the waitlist to HostDashboard
                  addToWaitlist={addToWaitlist} // Pass addToWaitlist to HostDashboard
                  removeFromWaitlist={removeFromWaitlist} // Pass removeFromWaitlist to HostDashboard
                />
              }
            />
            <Route
              path="/user-dashboard"
              element={
                <UserDashboard
                  waitlist={waitlist} // Pass the same waitlist to UserDashboard
                />
              }
            />
          </Routes>
        </div>

        {/* Footer with contact info */}
        <footer className="app-footer">
          <p>Email: desai.j.tanmay@gmail.com</p>
          <p>Phone: (805) 871-6211</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
