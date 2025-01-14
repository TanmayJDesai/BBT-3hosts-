import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Import trash can icon from react-icons

function HostDashboard() {
  const [waitlist, setWaitlist] = React.useState([]);
  const [occupancy, setOccupancy] = React.useState(0);
  const [newCustomer, setNewCustomer] = React.useState({ name: '', partySize: 1 });

  // Add a customer to the waitlist
  const addToWaitlist = (customer) => {
    setWaitlist([...waitlist, customer]);
  };

  // Remove a customer from the waitlist
  const removeFromWaitlist = (index) => {
    setWaitlist(waitlist.filter((_, i) => i !== index));
  };

  const updateOccupancy = (percentage) => {
    setOccupancy(percentage);
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (newCustomer.name && newCustomer.partySize) {
      addToWaitlist(newCustomer);
      setNewCustomer({ name: '', partySize: 1 }); // Reset input fields
    }
  };

  return (
    <div className="host-dashboard">
      <h1 className="title">Host Dashboard</h1>

      <div className="occupancy-section">
        <h2>Current Occupancy: {occupancy}%</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={occupancy}
          onChange={(e) => updateOccupancy(e.target.value)}
          className="occupancy-range"
        />
      </div>

      {/* Add new customer form */}
      <div className="add-customer-section">
        <h2>Add New Customer to Waitlist</h2>
        <form onSubmit={handleAddCustomer} className="customer-form">
          <input
            type="text"
            placeholder="Customer Name"
            value={newCustomer.name}
            onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
            required
            className="input-field"
          />
          <input
            type="number"
            placeholder="Party Size"
            value={newCustomer.partySize}
            onChange={(e) => setNewCustomer({ ...newCustomer, partySize: e.target.value })}
            min="1"
            required
            className="input-field"
          />
          <button type="submit" className="submit-button">Add to Waitlist</button>
        </form>
      </div>

      {/* Waitlist section with Remove (Trashcan) button */}
      <div className="waitlist-section">
        <h2>Waitlist</h2>
        {waitlist.length === 0 ? (
          <p>No customers currently on the waitlist.</p>
        ) : (
          waitlist.map((customer, index) => (
            <div key={index} className="waitlist-item">
              <span>{customer.name} - Party of {customer.partySize}</span>
              <button
                onClick={() => removeFromWaitlist(index)}
                className="remove-button"
              >
                <FaTrash /> {/* Trashcan icon next to the name */}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HostDashboard;