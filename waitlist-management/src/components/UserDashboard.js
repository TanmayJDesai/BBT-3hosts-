import React from 'react';
import './UserDashboard.css'; // Assuming you will create a separate CSS file

function UserDashboard({ waitlist = [], occupancy = 0 }) {
  const [userPosition, setUserPosition] = React.useState(null);

  React.useEffect(() => {
    const currentUser = waitlist.find((customer) => customer.name === "Your Name");
    if (currentUser) {
      setUserPosition(waitlist.indexOf(currentUser) + 1);
    }
  }, [waitlist]);

  return (
    <div className="user-dashboard">
      <h1 className="dashboard-title">User Dashboard</h1>

      {userPosition && (
        <div className="user-position">
          <h2>You're currently #{userPosition} on the waitlist</h2>
        </div>
      )}

      <div className="waitlist-summary">
        <h2>Waitlist</h2>
        {waitlist.length === 0 ? (
          <p>No customers currently on the waitlist.</p>
        ) : (
          waitlist.map((customer, index) => (
            <div key={index}>
              #{index + 1}: {customer.name} - Party of {customer.partySize}
            </div>
          ))
        )}
      </div>

      <div className="occupancy-summary">
        <h2>Current Occupancy</h2>
        <p>{occupancy.toFixed(2)}% of the capacity is occupied.</p>
      </div>
    </div>
  );
}


export default UserDashboard;