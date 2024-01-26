import React from 'react';
import '../styles/StyleFooter.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <button className='customer-service'>
        <Link to='/usersupport'>고객센터</Link>
      </button>
      <div className='copyright'>© 2024 PetMates. All rights reserved.</div>
    </div>
  );
};

export default Footer;
