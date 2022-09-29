import React from 'react';
import './BreakCount.css'
const BreakCount = (props) => {
  return (
    <div>
      <div className='break-count'>
          <h3>Break time:</h3>
          <p>{props.breakC}</p>
        </div>
    </div>
  );
};

export default BreakCount;