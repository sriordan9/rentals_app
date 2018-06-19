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