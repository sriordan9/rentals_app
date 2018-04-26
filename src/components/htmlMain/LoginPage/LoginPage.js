import React, { Component } from 'react';
import Axios from 'axios';

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
        }
    }

    handleLoginInput = (event) => {
        let loginCopy = {...this.state.login};
        loginCopy[event.target.name] = event.target.value;

        this.setState({
            login: {...loginCopy}
        });
    }

    handleSubmitLogin = (event) => {
        console.log(this.state.login);

        Axios.post('http://localhost:3001/login', {
            login: this.state.login
        }).then((response) => {
            console.log(response);
        });
        // .then((response) => { 
        //     let data = response.data; //entire response is an object that includes header, status code, etc.
        //     this.setState({
        //     availableRooms: data
        //     });
        // });
    }

    handleCreateInput = (event) => { // user inputs data into "create account" form
        let createAcctCopy = {...this.state.createAcct};
        createAcctCopy[event.target.name] = event.target.value;

        this.setState({
            createAcct: {...createAcctCopy}
        });
    }

    handleCreateAcct = (event) => { // user clicks "create account" button

        // 1) if both passwords are same, if not then display "passwords must match"
        // message
        // 2) if all fields not filled display "form incomplete" message

        Axios.post('http://localhost:3001/createAcct', {
            createAcct: this.state.createAcct
        }).then((response) => {
            // console.log('response received from express');
            // or whatever else you may need to do such as 
            // "account created" message
        });

        // .then((response) => { 
        //     let data = response.data; //entire response is an object that includes header, status code, etc.
        //     this.setState({
        //     availableRooms: data
        //     });
        // });
    }


    render() {
        return (
            <div className="LoginPage">
                <Login onChange={this.handleLoginInput} 
                    clickLogin={this.handleSubmitLogin} />
                <CreatAcct onChange={this.handleCreateInput} 
                    clickCreate={this.handleCreateAcct}/>
            </div>
        );
    }

}

export default LoginPage;