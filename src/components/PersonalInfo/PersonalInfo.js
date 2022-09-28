import React from 'react';
import './PersonalInfo.css'
import image from '../../images/img-1.png';
const PersonalInfo = () => {
  return (
    <div className='personal-info'>
       <img src= {image} alt="" />
       <h2>Md: Omar Faruk</h2>
    </div>
  );
};

export default PersonalInfo;