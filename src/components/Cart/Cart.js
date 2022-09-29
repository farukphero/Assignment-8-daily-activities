import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const { name, time, picture,about } = props.cart
  return (
    <div className='cart-style'>
      <img src={picture} alt="" />
      <div className='cart-details'>
      <h1>{name}</h1>
      <p>{about.slice(0,125)}...</p>
      <p><b>Time required:</b> {time} hours</p>
      <button onClick={()=>props.handleClick(props.cart)} className='add-to-list-btn'>Add to list</button>
      </div>
    </div>
  );
};

export default Cart;