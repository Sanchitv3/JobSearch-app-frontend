import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastname] = useState('');
  const [category, setcategory] = useState('');
  const navigate = useNavigate();

  const countries = [
    'Select category',
    'Employer',
    'Employe',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password, lastname , category })
      .then((result) => {
        console.log(result);
        toast.success('SignUp successful!', { position: 'top-center' });
        setTimeout(() => navigate('/login'), 1000);

        console.log('you are here');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='parent-container flex justify-center items-center h-screen text-gray-800'>
      <div className='container p-6 rounded-lg shadow-xl border to-black w-50 md:w-80'>
        <h3 className='text-2xl text-center mb-4 text-red-700 font-mono'>
          Create Your JobSearch Account
        </h3>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='mb-4'>
            <div className='flex items-center space-x-2'>
              <i className='fa fa-address-card-o text-black' aria-hidden='true' style={{ fontSize: '20px' }}></i>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                className='input border p-2 rounded flex-1'
                onChange={(e) => setName(e.target.value)}
              />
              <i className='fa fa-address-card-o text-black' aria-hidden='true' style={{ fontSize: '20px' }}></i>
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                className='input border p-2 rounded flex-1'
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className='flex items-center space-x-2 mt-2'>
              <i className='fa fa-envelope text-black' aria-hidden='true' style={{ fontSize: '20px' }}></i>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='input border p-2 rounded flex-1'
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className='fa fa-key text-black' aria-hidden='true' style={{ fontSize: '20px' }}></i>
              <input
                type='password'
                name='password'
                placeholder='Password'
                className='input border p-2 rounded flex-1'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex items-center space-x-2 mt-2'>
              <i className='fa fa-globe text-black' aria-hidden='true' style={{ fontSize: '20px' }}></i>
              <input
                type='text'
                name='zipCode'
                placeholder='Zip Code'
                className='input border p-2 rounded flex-1'
              />
              <i className='fa fa-map-marker text-black' aria-hidden='true' style={{ fontSize: '20px' }}></i>
              <select
                name='category'
                className='input border p-2 rounded flex-1'
                onChange={(e) => setcategory(e.target.value)}
              >
                {countries.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='items-start-;eft mb-3'>
            <span className='text-sm text-gray-800 flex-'>
            <input type='checkbox' required />
              "By Signing up with Job Portal, you agree to accept our policies and you agree to be updated on new offers, products, and services from Job Portal and any of its related companies using contact details provided."
            </span>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='w-39 bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-all duration-300'
            >
              Create Account
            </button>
          </div>
        </form>
        <ToastContainer />
        <div className='mt-4 text-sm text-gray-800 text-center'>
          Already Signed Up? Click here to <Link to='/login' className='text-blue-500'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
