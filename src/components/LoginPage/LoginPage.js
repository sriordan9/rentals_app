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
                let first_name = info.first_name[0].toUpperCase() + info.first_name.slice(1);
                
                sessionStorage.setItem('email', info.email);
                sessionStorage.setItem('name', first_name);
                sessionStorage.setItem('user_id', info.id);
                
                if(info.unit_number) {
                    sessionStorage.setItem('unit_number', info.unit_number);
                }
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

        } else if(this.state.createAcct.email){

            Axios.post('http://localhost:3001/createAcct', {
                createAcct: this.state.createAcct
            }).then(() => {
                // "account created" message
            });
            window.location.reload();
            console.log('form completed'); 

        } else {
            console.log('error encountered');
            
        }
    }

    // ** Place functions in alphabetical order

    render() {
        return (
            <div className="LoginPage">
                <section>
                    <Login onChange={this.handleLoginInput} 
                        clickLogin={this.handleSubmitLogin} />
                    <CreatAcct onChange={this.handleCreateInput} 
                        clickCreate={this.handleCreateAcct}
                        styleClasses={this.state.fieldRequiredClass}/>
                </section>
            </div>
        );
    }
}

export default LoginPage;