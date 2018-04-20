import Axios from 'axios'; 
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AvailableForm from './components/htmlMain/AvailableForm/AvailableForm';
import LoginPopup from './components/htmlMain/LoginPopup/LoginPopup';
import Footer from './components/Footer';
import Header from './components/Header';
import HtmlMain from './components/htmlMain/HtmlMain';
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
      rooms: 0, hardwood: 'none', wheelchair: 'none',
      pets: 'none'
    },
    availableRooms: null 
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
    // this.setState({
    //   availableRooms: null
    // });

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

  // handleLoginPopup = () => {

  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <HtmlMain />
          <AvailableForm inputs={this.state.inputs} 
            rooms={this.state.availableRooms}
            onChange={this.handleInputChange}
            clickSubmitFiltered={this.handleSubmitFiltered}
            clickAllAvail={this.handleSubmitAll}/>
          <LoginPopup />
          {/* <ul className="App_ul">
            <li>Available Apartments</li>
            <li>Apply Here!</li>
          </ul> */}
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;