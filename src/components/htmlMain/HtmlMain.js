import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home';
import Amenities from './Amenities/Amenities';

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