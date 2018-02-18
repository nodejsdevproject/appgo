import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';
import '../App.css';
class AppHeader extends Component {
  render() {
    console.log(this.props.header);
    return (
      <div className="App-header bg-dark">
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default AppHeader;
