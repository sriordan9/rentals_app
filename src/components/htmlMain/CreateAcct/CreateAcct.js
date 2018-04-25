import React from 'react';

import './CreateAcct.css'

const createAcct = () => {
    return(
        <div className="createAcct">
            <form>
                <label>First Name</label>
                <input type="text" name="firstName"></input>
                <label>Last Name</label>
                <input type="text" name="lastName"></input>
                <label>Email</label>
                <input type="text" name="email"></input>
                <label>Password</label>
                <input type="text" name="password"></input>
                <button type="button">Create Account</button>
            </form>
        </div>
    );
};

export default createAcct;