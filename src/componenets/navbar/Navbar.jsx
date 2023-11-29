import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import UserDetails from './UserDetails';

const Navbar = ({ onMeClick }) => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     setLoading(true);
  //     try {
  //       const token = localStorage.getItem('token');
  //       if (!token) {
  //         // Handle missing token
  //         return;
  //       }

  //       const response = await axios.get('http://localhost:3001/me', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       setUser(response.data.user);
  //     } catch (error) {
  //       console.error('Error fetching user details:', error);
  //       setError('Error fetching user data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

    if (showUserDetails) {
      fetchUserData();
    }
  }, [showUserDetails];

  const handleMeClick = () => {
    setShowUserDetails(!showUserDetails);
    if (onMeClick) {
      onMeClick();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-white text-xl font-bold">
            Your Logo
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for a job"
              className="bg-gray-200 text-gray-800 rounded-full py-2 px-4 focus:outline-none"
            />
            <button className="absolute right-0 top-0 mt-2 mr-4">🕵️</button>
          </div>
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <span className="text-white" onClick={handleMeClick}>
            {showUserDetails ? 'Close Me' : 'Me'}
          </span>
          <span className="text-white" onClick={handleLogout}>
            Logout
          </span>
        </div>
      </div>

      {showUserDetails && (
        <div className="absolute bg-white text-black p-4 mt-2 rounded right-2">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {user && (
            <UserDetails name={user.name} email={user.email} />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

