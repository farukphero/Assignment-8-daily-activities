import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      
      <h2><FontAwesomeIcon icon={faHandHoldingHeart}/> Faruk's Daily Activities</h2>
    </div>
  );
};

export default Header;