import React, { Component } from 'react';

import './UserAcct.css';

class userAcct extends Component { // May not need it to extend component. Change back to const?

    handleLogOut = () => {
        sessionStorage.clear();
        this.props.loggedOut();        
    }

    render() {
        return(
            <div>
                <h3>Welcome <span>{sessionStorage.name}</span></h3>
                <p>You currently have the following apartments:</p>
                <button type="button" onClick={this.handleLogOut}>Logout</button>
            </div>
        );
    };
};

export default userAcct;