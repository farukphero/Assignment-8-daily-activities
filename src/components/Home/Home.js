import React from 'react';
import Break from '../Break/Break';
import Questions from '../Cart/Questions/Questions';
import Carts from '../Carts/Carts';
import Exercise from '../Exercise/Exercise';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import './Home.css'
const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <div>
        <h1>Faruk's daily activity</h1>
       <Carts></Carts>
      </div>
      <div className='personal-details'>
        <h1>Personal details</h1>
        <PersonalInfo></PersonalInfo>
        <Break></Break>
        <Exercise></Exercise>
      </div>
      </div>
        <Questions></Questions>
    </div>
  );
};

export default Home;