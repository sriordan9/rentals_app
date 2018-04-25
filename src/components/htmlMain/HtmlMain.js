import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Amenities from './Amenities/Amenities';
import Home from './Home/Home';

class HtmlMain extends Component {
    render() {
      return (
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/amenities" component={Amenities} />
        </div>
      );
    }
}
  
export default HtmlMain;