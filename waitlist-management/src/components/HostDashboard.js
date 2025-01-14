import React from 'react';

function HostDashboard({ user }) {
  const [waitlist, setWaitlist] = React.useState([]);
  const [occupancy, setOccupancy] = React.useState(0);

  const addToWaitlist = (customer) => {
    setWaitlist([...waitlist, customer]);
  };

  const updateOccupancy = (percentage) => {
    setOccupancy(percentage);
  };

  return (
    <div className="host-dashboard">
      <h1>Host Dashboard</h1>
      <div className="occupancy-section">
        <h2>Current Occupancy: {occupancy}%</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={occupancy}
          onChange={(e) => updateOccupancy(e.target.value)}
        />
      </div>
      <div className="waitlist-section">
        <h2>Waitlist</h2>
        {waitlist.map((customer, index) => (
          <div key={index} className="waitlist-item">
            {customer.name} - Party of {customer.partySize}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HostDashboard;