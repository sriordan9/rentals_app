import React from 'react';

import CreateAcct from '../CreateAcct/CreateAcct';
import './LoginPopup.css';

const loginpopup = (props) => {
    return (
        <div>
            <CreateAcct />
        </div>
    );
  };
  
  export default loginpopup;


  // Make extend component and manage own state for login and acct creation?
  // Also have login page have own state?
  // oooor have CreateAcct and Login components handle own state (probably best)
  // if done first way then state will 

  // need state at all or can you make a post request without it??

  // redo form, make bigger and more standard looking and with labels
  // instead of placeholders on inputs

  // Pass state from App to LoginPopup file, use same state property to store 
  // the data from CreateAcct and Login that is inside LoginPopup component
  // have separate state for these two froms within the login page component