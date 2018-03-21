import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HtmlMain from './components/htmlMain/HtmlMain';
import AvailableForm from './components/htmlMain/AvailableForm/AvailableForm';

class App extends Component {
  state = {
    headerContent: [
      {id: '1', linkName: 'Amenities/Features'},
      {id: '2', linkName: 'Pricing'},
      {id: '3', linkName: 'Residents'},
      {id: '4', linkName: 'Contact Us'},
      {id: '5', phone: '1-800-867-5309'},
      {id: '6', email: 'jennyjenny@famousong.com'}
    ],
    inputs: [
      [
        {id: '7', type: 'radio', value: 1, name: 'rooms'},
        {id: '8', type: 'radio', value: 2, name: 'rooms'},
        {id: '9', type: 'radio', value: 3, name: 'rooms'}
      ],
      [
        {id: '10', type: 'radio', value:'Yes', name: 'hardwood'},
        {id: '11', type: 'radio', value:'No', name: 'hardwood'},
      ],
      [
        {id: '12', type: 'radio', value:'Yes', name: 'wheelchair'},
        {id: '13', type: 'radio', value:'No', name: 'wheelchair'},
      ],
      [
        {id: '14', type: 'radio', value:'Yes', name: 'pets'},
        {id: '15', type: 'radio', value:'No', name: 'pets'},
      ],
      [
        {id: '16', type: 'radio', value:'Yes', name: 'fireplace'},
        {id: '17', type: 'radio', value:'No', name: 'fireplace'},
      ],
    ],
    inputValues: {rooms: 0, hardwood: 'none', wheelchair: 'none',
      pets: 'none', fireplace: 'none'}
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
    console.log(this.state.inputValues.rooms);
    console.log(this.state.inputValues.hardwood);
    console.log(this.state.inputValues.wheelchair);
    console.log(this.state.inputValues.pets);
    console.log(this.state.inputValues.fireplace);

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <HtmlMain />
          <AvailableForm inputs={this.state.inputs} onChange={this.handleInputChange}
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


// Game Plan:
// 1) backtrack and finish each component, resposiveness, styling, 
// and css organization
// 2) figure out where to place components. (Main image in app or main component?)
// 3)
