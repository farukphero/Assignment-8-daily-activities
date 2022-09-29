import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const toastNotify = () => toast("Congratulation, Successfully Completed!");
    return (
      <div>
        <button onClick={toastNotify}>Activity Completed</button>
        <ToastContainer />
      </div>
    );
}
export default App;