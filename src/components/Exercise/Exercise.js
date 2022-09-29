import React from 'react';
import App from '../Toast/Toast';
import './Exercise.css'
const Exercise = (props) => {
  const { count } = props
  
  let total = 0;
  for (const minute of count) {
    total=total+ minute.time
  }
  let totalBreak = props.breakCounts;
   
  return (
    <div className='exercise-container'>
      <h2 style={{textAlign: 'justify'}}>Exercise Details</h2>
      <div className='exercise-time'>
        <h3>Exercise time</h3>
        <p>{total} hours </p>
      </div>
      <div className='break-time'>
        <h3>Break time</h3>
        <p> {totalBreak} 000 minutes</p>
      </div>
      
      <App></App>
    </div>
  );
};

export default Exercise;