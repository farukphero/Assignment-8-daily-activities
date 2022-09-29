import React, { useEffect, useState } from 'react';
import { addToBreak } from '../../utilities/breakdb';
// import { addToBreak } from '../../utilities/breakdb';
 
import './Break.css'
const Break = () => {
  const [breakCount, setBreakCount] = useState(0)
  const handleBreak = (event) => {
    // console.log(event.target.innerText)
    setBreakCount(event.target.innerText)
      }
   useEffect(() => {
     addToBreak(breakCount)
  },[breakCount])
  return (
    <div className='break-container'>
      <h2 style={{textAlign: 'justify'}}>Add To Break</h2>
      <div className='break-btn'>
      <button breakCounting={setBreakCount} onClick={(breakCount) => handleBreak(breakCount)}>10m</button>
      <button onClick={(breakCount) => handleBreak(breakCount)}>20m</button>
      <button onClick={(breakCount) => handleBreak(breakCount)}>40m</button>
      <button onClick={(breakCount) => handleBreak(breakCount)}>50m</button>
      </div>
    </div>
  );
};

export default Break;
 

 