import Axios from 'axios'; 
import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Amenities from './components/Amenities/Amenities';
import LoginPage from './components/LoginPage/LoginPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UserAcct from './components/UserAcct/UserAcct';

import './App.css';

class App extends Component {

    componentDidMount () {
      console.log('need to change the axios requests from local host');
      console.log('for the pi, requests should be to http://192.168.0.22:3001/');
    }


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
    selectedRadio: { 
      radioGroup1: null,
      radioGroup2: null,
      radioGroup3: null,
      radioGroup4: null
    },
    availableRooms: null,
    loggedIn: false,
    selectedApt: undefined // from apartment dropdown. Must be "undefined" bc if initially 
  }                         // set to null it causes an error

  handleSelectRadio = (event) => {                // Update state for radio button groups & relays values
    let copyForm = {...this.state.selectedRadio}; // down to component through selectedRadio prop
    
    if (event.target.name === 'rooms') {
      copyForm.radioGroup1 = event.target.id;
      
    } else if (event.target.name === 'hardwood') {
      copyForm.radioGroup2 = event.target.id;
    
    } else if (event.target.name === 'wheelchair') {
      copyForm.radioGroup3 = event.target.id;

    } else if (event.target.name === 'pets') {
      copyForm.radioGroup4 = event.target.id;

    }    
    this.setState({
      selectedRadio: {...copyForm}
    });
  }

  handleLoginTrue = () => { // Don't delete: Updates state to {login: true} so component re-loads.
    this.setState({         // If not, then email would save in sessionStorage, but user
      loggedIn: true        // would need to reload for react to recheck sessionStorage.
    });
  }
  handleLoginFalse = () => {
    this.setState({
      loggedIn: false
    });
  }

  //function to handle error for no rooms chosen

  handleInputChange = (event) => {

    let copyForm = {...this.state.inputValues};
    copyForm[event.target.name] = event.target.value;

    this.setState({
      inputValues: {...copyForm}
    });
  }

  //write .catch for submit function

  handleSubmitFiltered = () => {
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

  handleSubmitAll = () => {
    Axios.get('http://localhost:3001/allAvailable')
      .then((response) => { 
        let data = response.data; //entire response is an object that includes header, status code, etc.

        this.setState({
          availableRooms: data
        });
      });
  }

  handleReserveApt = () => {
    if (this.state.selectedApt !== undefined // if user selected an apt & is logged in
      && window.sessionStorage.email) { // then allow them to proceed & reserve
      
        if(window.sessionStorage.reservedApt) { // Don't proceed if they already have an apt
        console.log('You already reserved an apt');

      } else {
          Axios.post('http://localhost:3001/reserveAnApt', {
            selectedApt: this.state.selectedApt,
            user_id: window.sessionStorage.user_id
          })
            .then((response) => { 
              let data = response.data; //entire response is an object that includes header, status code, etc.
              
              console.log(data); 
              // when stuff comes back, or when true is sent then display message 'apartment reserved!'       
              //update state or session storage so the apt shows in the user dashboard
            });
      }
    } else if(!window.sessionStorage.email) {
        console.log('Must be loggedin');
    }    
  }

  handleRemoveApt = () => {
    if(window.sessionStorage.reservedApt) {
      Axios.post('http://localhost:3001/unReserveApt', {
        unit_number: window.sessionStorage.reservedApt,
        user_id: window.sessionStorage.user_id
      })
        .then((response) => { 
          let data = response.data; 
          
          console.log(data); 
          sessionStorage.removeItem('reservedApt');
          window.location.reload();
      });
    }
  }

  handleSelectedApt = (event) => {
    this.setState({
      selectedApt: event.target.value
    }); 
  }

  render() {

    const loginAuth = () => {
      if(window.sessionStorage.email) {
        return <Redirect to="/userAcct" />
      } else {
        return <LoginPage loggedIn={this.handleLoginTrue}/>
      }
    }

    const userAuth = () => {
      if(!window.sessionStorage.email) {
        return <Redirect to="/loginPage" />
      } else {
        return <UserAcct loggedOut={this.handleLoginFalse}
          handleRemoveApt={this.handleRemoveApt}/>
      }
    }

    const homePage = () => {    // Can't use "exact component" if using render inline. So created new variable for component 
      return(                    // If not using exact component, other pages display on top of home page. 
        <Home inputs={this.state.inputs} 
          rooms={this.state.availableRooms}
          onChange={this.handleInputChange}
          clickSubmitFiltered={this.handleSubmitFiltered}
          clickAllAvail={this.handleSubmitAll}
          handleSelectedApt={this.handleSelectedApt} // Finds which apt number was selected
          handleReserveApt={this.handleReserveApt}
          selectedApt={this.state.selectedApt} // Passes down the currently selected option value to component (2 way binding?)
          selectedRadio={this.state.selectedRadio} // Same as selectedApt, but for radio buttons
          handleSelectRadio={this.handleSelectRadio}/>
      );
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" exact component={homePage} />    
          {/* NOTE: need to make appear when user clicks "available apts" */}
          {/* <ul className="App_ul">
            <li>Available Apartments</li>
            <li>Apply Here!</li>
          </ul> */}
          {/* <Footer/> */}
          <Route path="/amenities" exact component={Amenities} />
          <Route path="/userAcct" render={userAuth} />
          <Route path="/loginPage" render={loginAuth} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;