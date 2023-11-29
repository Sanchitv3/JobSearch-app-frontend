import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Me = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/me', {
      headers: {
        Authorization: localStorage.getItem('token'), // Retrieve the token from localStorage
      },
    })
    .then((response) => {
      setUser(response.data);
    })
    .catch((error) => {
      console.error('Error fetching user details:', error);
    });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Me;
