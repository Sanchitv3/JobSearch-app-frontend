import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from '../navbar/Navbar1';
import JobData2 from './JobData2';
import { Link } from 'react-router-dom';

const UserDash2 = () => {
  const [isMeSectionOpen, setIsMeSectionOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [user, setUser] = useState(null);

  const openMeSection = () => {
    setIsMeSectionOpen(true);
  };

  const closeMeSection = () => {
    setIsMeSectionOpen(false);
  };

  const fetchSubmittedData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/jobs');
      setSubmittedData(response.data);
    } catch (error) {
      console.error('Error fetching submitted data', error);
    }
  };

  useEffect(() => {
    fetchSubmittedData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    if (!token) {
      return; 
    }

    axios.get('http://localhost:3001/me', {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log('User data:', response.data);
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          console.error('Error fetching user details:', response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  return (
    <div className='mt-32'>
      <Link to='/userdash' className='no-underline'><span className='bg-black rounded-full font-serif text-white p-1 mx-5'>UserDash</span></Link>
      <Navbar1 onMeClick={openMeSection} />
      {isMeSectionOpen && user && (
        <div className="absolute right-8 top-12 bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
          <button onClick={closeMeSection} className="text-blue-500 cursor-pointer mt-2">
            Close Me
          </button>
        </div>
      )}
      <JobData2 submittedData={submittedData} />
    </div>
  );
};

export default UserDash2;
