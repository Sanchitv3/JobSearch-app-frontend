import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import UserDash2 from './forms/UserDash2';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/login', { email, password })
  //     .then((result) => {
  //       console.log(result.data);
  //       const userCategory = result.data.cat;
  //       // console.log(userCategory);
  //       if (result.data.success && userCategory==='Employer') {
  //         toast.success('Login successful!', { position: 'top-center' });
  //         setTimeout(() => navigate('/userdash'), 1000);
  //       }
  //       else if (result.data.success && userCategory==='Employee') {
  //         toast.success('Login successful!', { position: 'top-center' });
  //         setTimeout(() => navigate('/userdash'), 1000);
  //       }
  //       else {
  //         toast.error('Invalid email or password', { position: 'top-center' });
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error('Error logging in', { position: 'top-center' });
  //       console.log(err);
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending request with payload:', { email, password });
  
    axios.post('http://localhost:3001/login', { email, password })
      .then((result) => {
        console.log('Response:', result.data);
  
        const userCategory = result.data.cat;
        console.log(userCategory);
        if (result.data.success && userCategory==='Employer') {
          toast.success('Login successful!', { position: 'top-center' });
          setTimeout(() => navigate('/userdash'), 1000);
        } else if (result.data.success) {
          toast.success('Login successful!', { position: 'top-center' });
          setTimeout(() => navigate('/userdash2'), 1000);
        } else {
          toast.error('Invalid email or password', { position: 'top-center' });
        }
      })
      .catch((err) => {
        toast.error('Error logging in', { position: 'top-center' });
        console.error('Request failed:', err);
      });
  };
  

  

  useEffect(() => {
    return () => toast.dismiss();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-2xl w-96">
        <h1 className="text-3xl text-blue-500 mb-6 text-center">JobSearch</h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Stay connected with the professional world
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border border-black rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border border-black rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 text-sm text-blue-500 text-left">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Log in
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
