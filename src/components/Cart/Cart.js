import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const { id, name, time, picture } = props.cart
  return (
    <div className='cart-style'>
      <img src={picture} alt="" />
      <div className='cart-details'>
      <h1>{name}</h1>
      <p>{id}</p>
      <p>Time required : {time}</p>
      <button onClick={()=>props.handleClick(props.cart)} className='add-to-list-btn'>Add to list</button>
      </div>
    </div>
  );
};

export default Cart;