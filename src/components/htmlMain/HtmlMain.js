import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Amenities from './Amenities/Amenities';
import Home from './Home/Home';
import LoginPage from './LoginPage/LoginPage';

class HtmlMain extends Component {
    render() {
      return (
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/amenities" component={Amenities} />
          <Route path="/loginPage" component ={LoginPage} />
        </div>
      );
    }
}
  
export default HtmlMain;