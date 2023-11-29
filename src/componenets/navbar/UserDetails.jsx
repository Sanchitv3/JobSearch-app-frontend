// UserDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // Handle missing token
          return;
        }

        const response = await axios.get('http://localhost:3001/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data.user);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='text-black-800 bg-blue-300'>
          <p>Name: {userData?.name}</p>
          <p>Email: {userData?.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
