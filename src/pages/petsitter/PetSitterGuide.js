import React from 'react';
import HeaderWithNav from '../../components/HeaderWithNav.js';
import Footer from '../../components/Footer.js';
import PetSitterRightbtns from '../../components/PetSitterRightBtns.js';
import '../../styles/StylePetSitterGuide.css';

const PetSitterGuide = () => {
  return (
    <div>
      <HeaderWithNav></HeaderWithNav>
      <PetSitterRightbtns></PetSitterRightbtns>
      <Footer />
    </div>
  );
};

export default PetSitterGuide;
