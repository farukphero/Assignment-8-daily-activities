import React, { useEffect, useState } from 'react';
import BreakCount from '../BreakCount/BreakCount';
import './Break.css'
const Break = () => {
  const [breakCount, setBreakCount] = useState('')
  const handleBreak = (event) => {
    localStorage.setItem('break', event.target.innerText)
    const addedBreak = localStorage.getItem('break')
    if (addedBreak) {
     setBreakCount(addedBreak)
    }
  }
  useEffect(() => {
    const addedBreak = localStorage.getItem('break')
    if (addedBreak) {
      setBreakCount(addedBreak)
    }
  },[breakCount])
  return (
    <div className='break-container'>
      <h2 style={{textAlign: 'justify'}}>Add To Break</h2>
      <div className='break-btn'>
      <button onClick={handleBreak}>10m</button>
      <button onClick={handleBreak}>20m</button>
      <button onClick={handleBreak}>30m</button>
      <button onClick={handleBreak}>40m</button>
      <button onClick={handleBreak}>50m</button>
      </div>
      <BreakCount breakC={breakCount}></BreakCount>
    </div>
  );
};

export default Break;
 

 