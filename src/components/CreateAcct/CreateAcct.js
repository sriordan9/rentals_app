import React from 'react';

import './CreateAcct.css'

const createAcct = (props) => {
    return(
        <div className="CreateAcct"
            onChange={props.onChange}>
            <h3>Create an Account</h3>
            <form>
                <label>First Name</label>
                <input className={props.fieldRequiredClass}
                    
                    type="text" name="firstName"></input>
                <label>Last Name</label>
                <input 
                    type="text" name="lastName"></input>
                <label>Email</label>
                <input 
                    type="text" name="email"></input>
                <label>Password</label>
                <input 
                    type="text" name="password"></input>
                <label>Confirm Password</label>
                <input 
                    type="text" name="pswdConfirm"></input>
                <p className="pswdCompare">Passwords must match</p>
                <button onClick={props.clickCreate}
                    type="button">Create Account</button>
            </form>
        </div>
    );
};

export default createAcct;