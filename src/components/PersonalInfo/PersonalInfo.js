import React from 'react';
import './PersonalInfo.css'
import image from '../../images/img-1.png';
const PersonalInfo = () => {
  return (
    <div className='personal-container'>
      <div  className='personal-info'>
        <div className='image'>
        <img src= {image} alt="" />
        </div>
      <div className='detail-info'>
        <h2 > Md: Omar Faruk</h2>
        <p>A potential web developer</p>
        <p>Rajshahi, Bangladesh</p>
      </div>
      </div>
      <div className='more-info'>
        <div>
          <h4>RU</h4>
          <p>Study</p>
         </div>
        <div>
          <h4>Web-De... </h4>
          <p>Dream</p>
         </div>
        
        <div>
          <h4>24</h4>
          <p>Age</p>
         </div>
          
      
      </div>
    </div>
  );
};

export default PersonalInfo;