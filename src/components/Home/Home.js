import React from 'react';
import Carts from '../Carts/Carts';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import './Home.css'
const Home = () => {
  return (
    <div className='home-container'>
      <div>
        <h1>Faruk's daily activity</h1>
       <Carts></Carts>
      </div>
      <div>
        <h1>Personal details</h1>
        <PersonalInfo></PersonalInfo>
      </div>
    </div>
  );
};

export default Home;