import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/appheader'
import AppFooter from './components/appfooter'
import AppLeftmenu from './components/appleftmenu'
import AppRightcontent from './components/apprightcontent'
import $ from 'jquery';
import AppModalDialog from './components/appmodaldialog';
import LocalizedStrings from 'react-localization';
import './helper'
import { translateObject } from './helper';

class App extends Component {
  constructor() {
    super();

    this.menuClicked = this.menuClicked.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.state = {}
  }

  // parent need notify the right content panel to update.
  menuClicked(content) {
    this.appRightcontent.LoadContent(content);
  }

  openDialog(content) {
    // we need show the dailog first. Then load let the child update the content.
    $('#exampleModalCenter').modal('show')
    this.appModalDialog.LoadContent(content)
  }

  componentWillMount() {
    // hide the show dailog
    console.log("Will mount");
    $.ajax({
      url: process.env.REACT_APP_WEB_API_URL + "api/appconfigs",
      dataTyoe: 'json',
      cache: false,
      crossDomain: true, 
      success: function (apConfigs) {
        console.log("Load appConfig done:" + apConfigs); // Load the appConfig form server.
        this.state.appConfig = apConfigs[0];
        
        // Use the default lanuage to render the page. If you pick another lanuage. you can call the follow line to change it.
        this.setState({
          appConfig: this.getTranslatedAppConfig(this.state.appConfig.defaultLanguage)
       },
        
 
        ); 
        // Translate the date from local.Why? We need the ability to dynamic translate. So if you change the lanauge later. 
        // We don't need access the server by http request. That is why. 
      }.bind(this),
      error: function (xrh, status, err) {
        console.log(err);
      }
    })
    console.log(process.env.REACT_APP_WEB_API_URL);
    // We also need load the language libary
  }

  componentDidMount() {
    console.log("Mounted");
  }
  
  getTranslatedAppConfig = (lang) => { 
   return translateObject(this.state.appConfig.LocalizedStrings, lang, this.state.appConfig);
  }

  
  render() {
    // We get everything then start render. Idealy each compoenent shoud have it own config/model
    if (this.state.appConfig) {
      return (
        <div className="App">
          <AppHeader Config={this.state.appConfig} />
          <AppLeftmenu MenuClicked={this.menuClicked} Config={this.state.appConfig} />
          {/* tell the child I allow you open dailog. */}
          <AppRightcontent OpenDialog={this.openDialog} onRef={ref => (this.appRightcontent = ref)} />
          <AppFooter />
          {/* I will update the content once you tell me what need dispaly. This way we only refresh the content part. */}
          <AppModalDialog onRef={ref => (this.appModalDialog = ref)} />
        </div>
      );
    }
    return <div className="App-loader"></div>;
  }
}

export default App;
