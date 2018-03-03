import React, { Component } from 'react';
import './App.css';
import bg_image from './images/apartment_kitchen.jpg';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <img src={bg_image} alt="apartment kitchen"/>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
