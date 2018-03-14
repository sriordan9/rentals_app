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
        {id: '7', type: 'radio', value:'1'},
        {id: '8', type: 'radio', value:'2'},
        {id: '9', type: 'radio', value:'3'}
      ],
      [
        {id: '9', type: 'radio', value:'Yes'},
        {id: '10', type: 'radio', value:'No'},
      ],
      [
        {id: '11', type: 'radio', value:'Yes'},
        {id: '12', type: 'radio', value:'No'},
      ],
      [
        {id: '9', type: 'radio', value:'Yes'},
      ]
    ]
  }
  //create dynamic header


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <HtmlMain />
          <AvailableForm inputs={this.state.inputs}/>
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
