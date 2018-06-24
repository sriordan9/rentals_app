import Axios from 'axios';
import React, { Component } from 'react';

import CreatAcct from '../CreateAcct/CreateAcct';
import Login from '../Login/Login';
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        createAcct: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            pswdConfirm: ''
        },
        login: {
            email: '',
            password: ''
        },
        fieldRequiredClass: ""
    }

    handleLoginInput = (event) => {
        let loginCopy = {...this.state.login};
        loginCopy[event.target.name] = event.target.value;

        this.setState({
            login: {...loginCopy}
        });
    }

    handleSubmitLogin = () => {

        Axios.post('http://localhost:3001/login', {
            login: this.state.login
            
        }).then((response) => {
            let info = response.data;

            if(response.data) {
                sessionStorage.setItem('email', info.email);
                sessionStorage.setItem('name', info.first_name);
                this.props.loggedIn();                      // Updates state to {login: true} so component re-loads.  
                                                            // If not, then email would save in sessionStorage, but user
            } else {                                        // would need to reload for react to recheck sessionStorage.
                // * create try again message for bad login
            }                                              
        });                                                 
    }

    handleCreateInput = (event) => { // user inputs data into "create account" form
        let createAcctCopy = {...this.state.createAcct};
        createAcctCopy[event.target.name] = event.target.value;
        console.log(createAcctCopy);

        this.setState({
            createAcct: {...createAcctCopy}
        });
    }

    // handleFieldRequired = (event, missedField) {

    //     // check if any fields empty
        // if so then select empty field
        // apply fieldRequierd class through props
    // }

    handleCreateAcct = (event) => { // user clicks "create account" button

        // // need to create a check if account already exists
        if(this.state.createAcct.password !== this.state.createAcct.pswdConfirm) {
            console.log('Passwords must match');
        } else {

            Axios.post('http://localhost:3001/createAcct', {
                createAcct: this.state.createAcct
            }).then((response) => {
                // console.log('response received from express');
                // or whatever else you may need to do such as 
                // "account created" message
            });
        }

        if(this.state.createAcct.firstName === '') {
            console.log('Something was missed');
            console.log(event.target.value);
            console.log(event.target);
        } else {
            console.log('form completed');
        }

        // .then((response) => { 
        //     let data = response.data; //entire response is an object that includes header, status code, etc.
        //     this.setState({
        //     availableRooms: data
        //     });
        // });
    }

    // ** Place functions in alphabetical order

    render() {
        return (
            <div className="LoginPage">
                <Login onChange={this.handleLoginInput} 
                    clickLogin={this.handleSubmitLogin} />
                <CreatAcct onChange={this.handleCreateInput} 
                    clickCreate={this.handleCreateAcct}
                    styleClasses={this.state.fieldRequiredClass}/>
            </div>
        );
    }
}

export default LoginPage;