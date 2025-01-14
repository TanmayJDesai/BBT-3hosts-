import React from 'react';

function UserDashboard({ addToWaitlist, waitlist }) {
  const [name, setName] = React.useState('');
  const [partySize, setPartySize] = React.useState(1);
  const [userPosition, setUserPosition] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = { name, partySize: parseInt(partySize, 10) };
    addToWaitlist(customer);

    // Set user's position in the waitlist
    setUserPosition(waitlist.length + 1);

    // Reset form fields
    setName('');
    setPartySize(1);
  };

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <form onSubmit={handleSubmit} className="waitlist-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="partySize">Party Size:</label>
          <input
            type="number"
            id="partySize"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit">Join Waitlist</button>
      </form>

      {userPosition && (
        <div className="user-position">
          <h2>You're currently #{userPosition} on the waitlist</h2>
        </div>
      )}

      <div className="waitlist-summary">
        <h2>Current Waitlist</h2>
        {waitlist.map((customer, index) => (
          <div key={index} className="waitlist-item">
            {index + 1}. {customer.name} - Party of {customer.partySize}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
