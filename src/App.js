import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HtmlMain from './components/htmlMain/HtmlMain';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <HtmlMain/>
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
