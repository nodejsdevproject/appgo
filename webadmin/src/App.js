import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/appheader'
import AppFooter from './components/appfooter'
import AppLeftmenu from './components/appleftmenu'
import AppRightcontent from './components/apprightcontent'

class App extends Component {

  constructor() {
    super();
    this.state = {
      // Here to store all model
      appModel: {}
    }
  }

  componentWillMount() {
    this.state.appModel.header = "test";
    console.log("Will Mount1");
  }

  componentDidMount() {
    // hide the show dailog
    this.state.appModel.header = "test";
    console.log("Mounted");
  }

  render() {
    return (
      <div className="App">
        <AppHeader header={this.state.appModel.header} />
        <AppLeftmenu />
        <AppRightcontent />
        <AppFooter />
      </div>
    );
  }
}

export default App;
