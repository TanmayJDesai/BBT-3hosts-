import React, { useState } from 'react';
import HostDashboard from './HostDashboard';
import UserDashboard from './UserDashboard';

function DashboardApp() {
  const [waitlist, setWaitlist] = useState([]);

  // Function to add a customer to the waitlist (called by HostDashboard)
  const addToWaitlist = (customer) => {
    setWaitlist([...waitlist, customer]);
  };

  // Function to remove a customer from the waitlist (called by HostDashboard)
  const removeFromWaitlist = (index) => {
    setWaitlist(waitlist.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard-app">
      <HostDashboard 
        waitlist={waitlist} 
        addToWaitlist={addToWaitlist} 
        removeFromWaitlist={removeFromWaitlist} 
      />
      <UserDashboard waitlist={waitlist} />
    </div>
  );
}

export default DashboardApp;
