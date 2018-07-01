import React, { Component } from 'react';
import Axios from 'axios'; 

import './UserAcct.css';

class userAcct extends Component { // May not need it to extend component. Change back to const?


    state = {
        reservedApt: "None"
    }

    componentDidMount () {

        Axios.post('http://localhost:3001/reservedApt', {
            email: window.sessionStorage.email
        })
            .then((response) => { 
                if(response.data) {
                    let data = response.data; //entire response is an object that includes header, status code, etc.
                    sessionStorage.setItem('reservedApt', data.unit_number);
                    
                    this.setState({         // Save in session storage to create session, then update state. Otherwise user would need to
                        reservedApt: window.sessionStorage.reservedApt        // reload for react to recheck sessionStorage and update.
                    }); 
                }
            });
    }

    handleLogOut = () => {
        sessionStorage.clear();
        this.props.loggedOut();        
    }

    render(props) {             
        return(
            <div>
                <h3>Welcome <span>{sessionStorage.name}</span></h3>
                <p>You currently have the following apartments:</p>
                <div>
                    <span>{this.state.reservedApt}</span>
                    <button type="button"
                        onClick={this.props.handleRemoveApt}>
                        Remove</button>
                </div>
                <button type="button" onClick={this.handleLogOut}>Logout</button>
            </div>
        );
    };
};

export default userAcct;