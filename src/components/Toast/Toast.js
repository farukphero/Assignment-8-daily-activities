import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  function App(props){
    const notify = () => toast("Wow Successfully Completed!");
    return (
      <div>
        <button onClick={notify}>Activity Completed</button>
        <ToastContainer />
      </div>
    );
}
export default App;