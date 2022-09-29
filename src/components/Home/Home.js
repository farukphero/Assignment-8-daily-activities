import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Questions from '../Questions/Questions';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Header from '../Header/Header';
import './Home.css'
import { addToDb } from '../../utilities/fakedb';
const Home = () => {
  const [carts, setCarts] = useState([])
  const [count, setCount] = useState([])
  
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCarts(data))
  }, [])
  const handleClick = cart => {
    const newCount =  [...count, cart];
    setCount(newCount)
    addToDb(cart.id)
  }
  return (
    <div>
      <Header></Header>
      <div className='home-container'>
        <div>
        <h3 style={{textAlign:'justify', marginLeft:'65px'}}>Select today’s activities</h3>
       
      <div className='all-cart-style'>
        {
          carts.map(cart => <Cart
            key={cart.id}
            handleClick={handleClick}
            cart={cart}>{cart.name}</Cart>)
       }
      </div>
      
      </div>
      <div className='personal-details'>
        <h1>Personal details</h1>
        <PersonalInfo></PersonalInfo>
        <Break></Break>
          
        <Exercise count={count}></Exercise>
      </div>
      </div>
        <Questions></Questions>
    </div>
  );
};

export default Home;