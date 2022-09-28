import React from 'react';
import './Break.css'
const Break = () => {
  return (
    <div className='break-container'>
      <h2 style={{textAlign: 'justify'}}>Add To Break</h2>
      <div className='break-btn'>
      <button>10m</button>
      <button>20m</button>
      <button>40m</button>
      <button>50m</button>
      </div>
    </div>
  );
};

export default Break;