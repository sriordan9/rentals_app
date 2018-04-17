import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HtmlMain from './components/htmlMain/HtmlMain';
import AvailableForm from './components/htmlMain/AvailableForm/AvailableForm';
import Axios from 'axios'; 

class App extends Component {
  state = {
    headerContent: [
      {id: '1h', linkName: 'Amenities/Features'},
      {id: '2h', linkName: 'Pricing'},
      {id: '3h', linkName: 'Residents'},
      {id: '4h', linkName: 'Contact Us'},
      {id: '5h', phone: '1-800-867-5309'},
      {id: '6h', email: 'jennyjenny@famousong.com'}
    ],
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
      ],
      [
        {id: '10i', type: 'radio', value:'Yes', name: 'fireplace'},
        {id: '11i', type: 'radio', value:'No', name: 'fireplace'},
      ],
    ],
    inputValues: {
      rooms: 0, hardwood: 'none', wheelchair: 'none',
      pets: 'none', fireplace: 'none'
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

  handleSubmit = (events) => {
    Axios.post('http://localhost:3001/', {
      inputValues: this.state.inputValues
    })
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
          <HtmlMain />
          <AvailableForm inputs={this.state.inputs} 
            rooms={this.state.availableRooms}
            onChange={this.handleInputChange}
            onClick={this.handleSubmit}/>
          <ul className="App_ul">
            <li>Available Apartments</li>
            <li>Apply Here!</li>
          </ul>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;