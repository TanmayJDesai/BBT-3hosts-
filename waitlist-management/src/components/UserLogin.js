import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';

const UserLogin = () => {
  const navigate = useNavigate();

  // Sample restaurant data - including phone numbers now
  const allRestaurants = [
    {
      id: 1,
      name: "Italian Bistro",
      location: "123 Main St, Downtown",
      waitlistCount: 12,
      occupancyPercentage: 85,
      phoneNumber: "(123) 456-7890",
    },
    {
      id: 2,
      name: "Sushi Palace",
      location: "456 Ocean Ave, Beachside",
      waitlistCount: 8,
      occupancyPercentage: 70,
      phoneNumber: "(987) 654-3210",
    },
    {
      id: 3,
      name: "The Steakhouse",
      location: "789 Oak Rd, Uptown",
      waitlistCount: 15,
      occupancyPercentage: 95,
      phoneNumber: "(555) 555-5555",
    },
    {
      id: 4,
      name: "Pizza Corner",
      location: "101 Park St, Downtown",
      waitlistCount: 5,
      occupancyPercentage: 60,
      phoneNumber: "(111) 222-3333",
    },
    {
      id: 5,
      name: "Burger Joint",
      location: "202 Elm St, Uptown",
      waitlistCount: 9,
      occupancyPercentage: 80,
      phoneNumber: "(444) 555-6666",
    },
    {
      id: 6,
      name: "Taco Hut",
      location: "303 Oak Rd, Downtown",
      waitlistCount: 3,
      occupancyPercentage: 40,
      phoneNumber: "(777) 888-9999",
    },
    {
        id: 7,
        name: "Kailash Parbhat",
        location: "4517 Chino Hills Pkwy, Ste e Chino Hills, CA 91709",
        waitlistCount: 23,
        occupancyPercentage: 65,
        phoneNumber: "(909) 606-9090",
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurants);

  // Filter restaurants based on the search query
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === '') {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query)
      );
      setFilteredRestaurants(filtered);
    }
  };

  const handleRestaurantClick = (restaurantId) => {
    navigate('/user-dashboard', { state: { restaurantId } });
  };

  return (
    <div className="user-login-container">
      <h1 className="user-login-title">Select a Restaurant</h1>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by restaurant name..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="restaurant-card"
            onClick={() => handleRestaurantClick(restaurant.id)}
          >
            <div className="restaurant-info">
              <div className="restaurant-main">
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <p className="restaurant-location">{restaurant.location}</p>
                <p className="restaurant-phone">Phone: {restaurant.phoneNumber}</p>
              </div>
              <div className="restaurant-stats">
                <p className="waitlist-count">
                  Waitlist: {restaurant.waitlistCount} parties
                </p>
                <p className="occupancy-rate">
                  Occupancy: {restaurant.occupancyPercentage}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserLogin;
