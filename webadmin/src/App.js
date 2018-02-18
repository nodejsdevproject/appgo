import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/appheader'
import AppFooter from './components/appfooter'
import AppLeftmenu from './components/appleftmenu'
import AppRightcontent from './components/apprightcontent'
import $ from 'jquery'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentWillMount() {
     // hide the show dailog
     console.log("Will mount");
     $.ajax({
       url: process.env.REACT_APP_WEB_API_URL + "api/appconfigs",
       dataTyoe: 'json',
       cache: false,
       crossDomain: true,
       success: function (data) {
          console.log("data:" + data);
          this.setState({
            appConfig :data[0]
          }, function (){ console.log("Set appConfig Done!") })
       }.bind(this),
       error: function (xrh, status, err) {
         console.log(err);
       }
     })
     console.log(process.env.REACT_APP_WEB_API_URL);
  }

  componentDidMount() {
    console.log("Mounted");
  }

  render() {
    // We get everything then start render. Idealy each compoenent shoud have it own config/model
    if (this.state.appConfig) {
      return (
        <div className="App">
          <AppHeader Config={this.state.appConfig} />
          <AppLeftmenu />
          <AppRightcontent />
          <AppFooter />
        </div>
      );
    }
    return <div className="App-loader"></div>;
  }
}

export default App;
