import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/appheader'
import AppFooter from './components/appfooter'
import AppLeftmenu from './components/appleftmenu'
import AppRightcontent from './components/apprightcontent'
import $ from 'jquery'; 
import AppModalDialog from './components/appmodaldialog';

class App extends Component {
  constructor() {
    super();
    this.menuClicked = this.menuClicked.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.state = {
    }
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
          <AppLeftmenu MenuClicked={this.menuClicked} Config={this.state.appConfig}/>
           {/* tell the child I allow you open dailog. */}
          <AppRightcontent OpenDialog={this.openDialog}  onRef={ref => (this.appRightcontent = ref)} />
          <AppFooter />
           {/* I will update the content once you tell me what need dispaly. This way we only refresh the content part. */}
          <AppModalDialog  onRef={ref => (this.appModalDialog = ref)}/> 
        </div>
      );
    }
    return <div className="App-loader"></div>;
  }
}

export default App;
