import React from 'react';
import './UserDashboard.css'; // Assuming you will create a separate CSS file

function UserDashboard({ waitlist = [] }) {
  const [userPosition, setUserPosition] = React.useState(null);

  // Set user's position in the waitlist based on their name
  React.useEffect(() => {
    const currentUser = waitlist.find((customer) => customer.name === "Your Name"); // You can modify how you find users
    if (currentUser) {
      setUserPosition(waitlist.indexOf(currentUser) + 1); // Position is index + 1
    }
  }, [waitlist]);

  return (
    <div className="user-dashboard">
      <h1 className="dashboard-title">Current Waitlist</h1>
      
      {userPosition && (
        <div className="user-position">
          <h2 className="position-text">You're currently #{userPosition} on the waitlist</h2>
        </div>
      )}
      
      <div className="waitlist-summary">
        <h2 className="waitlist-title">Waitlist</h2>
        <div className="waitlist-list">
          {waitlist.length === 0 ? (
            <p>No customers currently on the waitlist.</p>
          ) : (
            waitlist.map((customer, index) => (
              <div key={index} className="waitlist-item">
                <span className="waitlist-index">{index + 1}</span> 
                <span className="waitlist-name">{customer.name}</span> - 
                <span className="waitlist-party-size">Party of {customer.partySize}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;