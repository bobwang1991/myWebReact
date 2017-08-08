import React, { Component } from 'react';

import Top from './Top';
import Nav from './Nav';
import Footer from './Footer';

class AppComponent extends Component {
  render() {
    return (
      <div>
        <Top/>
        <Nav/>
        <Footer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
