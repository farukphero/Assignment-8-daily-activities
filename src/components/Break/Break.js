import React, { useEffect, useState } from 'react';
import { addToBreak, getBreakCart} from '../../utilities/breakdb';
import BreakCount from '../BreakCount/BreakCount';
// import { addToBreak } from '../../utilities/breakdb';
 
import './Break.css'
const Break = () => {
  const [breakCount, setBreakCount] = useState([])
  const handleBreak = (event) => {
    console.log(event)
    // localStorage.setItem('break',event)
    setBreakCount(event.target.innerText)
    addToBreak(event)
  }
  // useEffect(() => {
  //   const storedCart=getBreakCart()
  //   const saveCart = []
  //    saveCart.push(storedCart)
  //  },[])
  return (
    <div className='break-container'>
      <h2 style={{textAlign: 'justify'}}>Add To Break</h2>
      <div className='break-btn'>
      <button onClick={handleBreak}>10m</button>
      <button onClick={handleBreak}>20m</button>
      <button onClick={handleBreak}>40m</button>
      <button onClick={handleBreak}>50m</button>
      </div>
      <BreakCount breakC={breakCount}></BreakCount>
    </div>
  );
};

export default Break;
 

 