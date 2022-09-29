import React from 'react';
import SideToast from '../Toast/Toast';
import './Exercise.css'
const Exercise = (props) => {
  const { count } = props
  let total = 0;
  for (const minute of count) {
    total=total+ minute.time
  }
  return (
    <div className='exercise-container'>
      <h2 style={{textAlign: 'justify'}}>Activities Time:</h2>
      <div className='exercise-time'>
        <h3>Activity time:</h3>
        <p>{total} hours </p>
      </div>
       <SideToast></SideToast>
    </div>
  );
};

export default Exercise;