import React from 'react';
import './Exercise.css'
const Exercise = () => {
  return (
    <div className='exercise-container'>
      <h2 style={{textAlign: 'justify'}}>Exercise Details</h2>
      <div className='exercise-time'>
        <h3>Exercise time</h3>
       <p>0 minutes</p>
      </div>
      <div className='break-time'>
        <h3>Break time</h3>
       <p>0 minutes</p>
      </div>
      <button>Activity Completed</button>
    </div>
  );
};

export default Exercise;