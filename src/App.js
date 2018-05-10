import Axios from 'axios'; 
import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Amenities from './components/Amenities/Amenities';
import AvailableForm from './components/AvailableForm/AvailableForm';
import LoginPage from './components/LoginPage/LoginPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UserAcct from './components/UserAcct/UserAcct';

import './App.css';

class App extends Component {
  state = {
    inputs: [
      [
        {id: '1i', type: 'radio', value: 1, name: 'rooms'},
        {id: '2i', type: 'radio', value: 2, name: 'rooms'},
        {id: '3i', type: 'radio', value: 4, name: 'rooms'}
      ],
      [
        {id: '4i', type: 'radio', value:'Yes', name: 'hardwood'},
        {id: '5i', type: 'radio', value:'No', name: 'hardwood'},
      ],
      [
        {id: '6i', type: 'radio', value:'Yes', name: 'wheelchair'},
        {id: '7i', type: 'radio', value:'No', name: 'wheelchair'},
      ],
      [
        {id: '8i', type: 'radio', value:'Yes', name: 'pets'},
        {id: '9i', type: 'radio', value:'No', name: 'pets'},
      ]
    ],
    inputValues: {
      rooms: '', hardwood: '', 
      wheelchair: '', pets: ''
    },
    availableRooms: null,
    loggedIn: false 
  }

  handleLoginTrue = () => {
    this.setState({
      loggedIn: true
    });
  }
  handleLoginFalse = () => {
    this.setState({
      loggedIn: false
    });
  }

  //function to handl error for no rooms chosen

  handleInputChange = (event) => {

    let copyForm = {...this.state.inputValues};
    copyForm[event.target.name] = event.target.value;

    this.setState({
      inputValues: {...copyForm}
    });
  }

  //write .catch for submit function

  handleSubmitFiltered = (events) => {
    Axios.post('http://localhost:3001/filtered', {
      inputValues: this.state.inputValues
    })
      .then((response) => { 
        let data = response.data; //entire response is an object that includes header, status code, etc.
        this.setState({
          availableRooms: data
        });
      });
  }

  handleSubmitAll = (events) => {
    Axios.get('http://localhost:3001/allAvailable')
      .then((response) => { 
        let data = response.data; //entire response is an object that includes header, status code, etc.

        this.setState({
          availableRooms: data
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <AvailableForm inputs={this.state.inputs} 
            rooms={this.state.availableRooms}
            onChange={this.handleInputChange}
            clickSubmitFiltered={this.handleSubmitFiltered}
            clickAllAvail={this.handleSubmitAll}/> 
            NOTE: need to make appear when user clicks "available apts"*/}
          {/* <ul className="App_ul">
            <li>Available Apartments</li>
            <li>Apply Here!</li>
          </ul> */}
          {/* <Footer/> */}
          <Route path="/" exact component={Home} />
          <Route path="/amenities" exact component={Amenities} />
          {/* <Route path="/pricing" exact component ={Pricing} /> */}
          {/* <Route path="/loginPage" exact component ={LoginPage} /> */}
          <Route path="/loginPage" render={()=> (
            !this.state.loggedIn ? 
              (<LoginPage loggedIn={this.handleLoginTrue} 
                loggedOut={this.handleLoginFalse}/>) : (<UserAcct />)
          )}/>
          {/* * Use redirect instead of render */}
          {/* <Route path="/userAcct" component ={UserAcct} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;