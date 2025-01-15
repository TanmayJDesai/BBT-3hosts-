import React from 'react';
import './HostDashboard.css';
import { FaTrash, FaChair, FaCheck } from 'react-icons/fa'; // Import trash, chair, and check icons from react-icons

function HostDashboard() {
  const TOTAL_CAPACITY = 50; // Set total capacity
  const MAX_PARTY_SIZE = 20; // Set maximum allowed party size
  const [waitlist, setWaitlist] = React.useState([]);
  const [seatedParties, setSeatedParties] = React.useState([]); // Track seated parties
  const [occupancy, setOccupancy] = React.useState(0); // Represents % occupancy
  const [currentPeople, setCurrentPeople] = React.useState(0); // Track the actual number of seated people
  const [newCustomer, setNewCustomer] = React.useState({ name: '', partySize: 1 });
  const [isModalOpen, setIsModalOpen] = React.useState(false); // Modal state
  const [modalMessage, setModalMessage] = React.useState(''); // Message for the modal

  // Add a customer to the waitlist
  const addToWaitlist = (customer) => {
    if (customer.partySize > MAX_PARTY_SIZE) {
      setModalMessage(`We can only accommodate parties of up to ${MAX_PARTY_SIZE} people. Please re-enter the details.`);
      setIsModalOpen(true); // Show modal with error message
      return; // Don't add to waitlist if party size exceeds the limit
    }

    setWaitlist([...waitlist, customer]);
    setNewCustomer({ name: '', partySize: 1 }); // Reset input fields
  };

  // Remove a customer from the waitlist
  const removeFromWaitlist = (index) => {
    setWaitlist(waitlist.filter((_, i) => i !== index));
  };

  // Seat a customer (remove them from the waitlist and update occupancy)
  const seatCustomer = (index) => {
    const seatedCustomer = waitlist[index];
    setCurrentPeople((prev) => {
      const updatedPeople = prev + seatedCustomer.partySize;
      const updatedOccupancy = Math.min((updatedPeople / TOTAL_CAPACITY) * 100, 100); // Calculate % occupancy
      setOccupancy(updatedOccupancy); // Update % occupancy
      return updatedPeople;
    });

    setSeatedParties([...seatedParties, seatedCustomer]); // Add customer to seated parties
    setWaitlist(waitlist.filter((_, i) => i !== index)); // Remove customer from the waitlist
    alert(`Customer seated: ${seatedCustomer.name}: Party of ${seatedCustomer.partySize}`);
  };

  // Check out a seated party (remove them from seated list and update occupancy)
  const checkOutParty = (index) => {
    const leavingParty = seatedParties[index];
    setCurrentPeople((prev) => {
      const updatedPeople = prev - leavingParty.partySize;
      const updatedOccupancy = Math.max((updatedPeople / TOTAL_CAPACITY) * 100, 0); // Calculate % occupancy
      setOccupancy(updatedOccupancy); // Update % occupancy
      return updatedPeople;
    });

    setSeatedParties(seatedParties.filter((_, i) => i !== index)); // Remove party from seated list
    alert(`${leavingParty.name}'s Party of ${leavingParty.partySize} has left.`);
  };

  // Close the error modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="host-dashboard" style={{ display: 'flex', gap: '20px' }}>
      {/* Waitlist Section */}
      <div className="waitlist-section" style={{ flex: 1 }}>
        <h2>Waitlist</h2>
        {waitlist.length === 0 ? (
          <p>No customers currently on the waitlist.</p>
        ) : (
          waitlist.map((customer, index) => (
            <div key={index} className="waitlist-item">
              <span>{customer.name} - Party of {customer.partySize}</span>
              <div className="button-group">
                <button onClick={() => seatCustomer(index)} className="seat-button">
                  <FaChair />
                </button>
                <button onClick={() => removeFromWaitlist(index)} className="remove-button">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}

        {/* Add new customer form */}
        <div className="add-customer-section">
          <h2>Add to Waitlist</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (newCustomer.name && newCustomer.partySize > 0) {
              addToWaitlist(newCustomer);
            }
          }} className="customer-form">
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
              onChange={(e) => setNewCustomer({ ...newCustomer, partySize: parseInt(e.target.value, 10) || 1 })}
              min="1"
              required
              className="input-field"
            />
            <button type="submit" className="submit-button">Add to Waitlist</button>
          </form>
        </div>
      </div>

      {/* Seated Parties Section */}
      <div className="seated-section" style={{ flex: 1 }}>
        <h2>Currently Seated Parties</h2>
        {seatedParties.length === 0 ? (
          <p>No parties are currently seated.</p>
        ) : (
          seatedParties.map((party, index) => (
            <div key={index} className="seated-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>{party.name} - Party of {party.partySize}</span>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => checkOutParty(index)} className="check-out-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaCheck />
                </button>
              </div>
            </div>
          ))
        )}

        <div className="occupancy-section">
          <h2>Current Occupancy</h2>
          <p>
            {currentPeople}/{TOTAL_CAPACITY} people currently seated.
          </p>
          <p>
            Occupancy Perecentage: {occupancy.toFixed(2)}%
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value={occupancy}
            readOnly
            className="occupancy-range"
          />
        </div>

      </div>

      {/* Error Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Error</h3>
            <p>{modalMessage}</p>
            <button onClick={closeModal} className="modal-close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HostDashboard;
