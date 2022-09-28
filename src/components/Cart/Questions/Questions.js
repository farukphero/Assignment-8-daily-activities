import React from 'react';
import './Questions.css'
const Questions = () => {
  return (
    <div>
      <h1 style={{ marginTop: '50px' }}>Welcome To Question Parts</h1>
      <div  className='question-container'>
        <div>
        <h1>How does react work?</h1>
        <p>React uses a declarative paradigm that makes it easier to reason about application and aims to be both efficient and flexible. It designs simple views for each state in application, and React will efficiently update and render just the right component when need to data changes.React make DOM so faster. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. </p>
      </div>
       
      <div>
        <h1>Difference between props and state.</h1>
        <p> <b>PROPS:</b>
          <li>The Data is passed from one component to another.</li>
          <li>It is Immutable (cannot be modified).</li>
          <li>Props can be used with state and functional components.</li>
          <li>Props are read-only.</li>
          <b>STATE</b>
          <li>The Data is passed within the component only.</li>
          <li>It is Mutable ( can be modified).</li>
          <li>State can be used only with the state components/class component (Before 16.0).</li>
          <li>State is both read and write.</li>
        </p>
      </div>
       
      <div>
        <h1>What does useeffect work without data load.</h1>
        <p>React will remember the function that may be passed and call it later after performing the DOM updates.In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. <br />
        Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.
        Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. 
        </p>
      </div>
      </div>
       
    </div>
  );
};

export default Questions;