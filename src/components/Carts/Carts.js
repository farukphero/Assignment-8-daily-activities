import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Carts.css'
const Carts = () => {
  const [carts, setCarts] = useState([])
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCarts(data))
  },[])
  return (
    <div className='container'>
      <div className='all-cart-style'>
        {
        carts.map(cart => <Cart cart={cart}>{ cart.name}</Cart>)
       }
      </div>
      
    </div>
  );
};

export default Carts;