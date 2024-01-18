import React from 'react';
import '../styles/StyleFooter.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <button className='customer-service'>
        <Link to='/usersupport'>고객센터</Link>
      </button>
      <div className='copyright'>Copyright(c)2024 by</div>
    </div>
  );
};

export default Footer;
