import "../../styles/StyleBasic.css";
import React from 'react';
import Header from '../../components/Header';
import LeftAside from '../../components/LeftAside';
import RightAside from '../../components/RightAside';

function Basic() {
  return (
    <div className="element">
      <Header/>
      <LeftAside/>
      <RightAside/>
    </div>
  );
}

export default Basic;