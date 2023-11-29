import React from 'react';
import { Reveal } from '../Reveals';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-8 mt-96">
    <Reveal><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
        {/* Add social media links/icons as needed */}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Company</h3>
        <ul>
          <li>About Us</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Subscribe</h3>
        {/* Add a subscription form or link */}
      </div>
    </div>
      </Reveal>
  </footer>
  )
}

export default Footer