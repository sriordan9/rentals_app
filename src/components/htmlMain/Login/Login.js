import React from 'react';

import './Login.css';

const login = (props) => {
    return (
        <div className="Login" 
            onChange={props.onChange}>
            <h3>Login</h3>
            <form>
                <label>Email</label>
                <input type="text" name="email"></input>
                <label>Password</label>
                <input type="text" name="password"></input>
                <button onClick={props.clickLogin} 
                        type="button">Login</button>
            </form>
        </div>
    );
  };
  
  export default login;


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