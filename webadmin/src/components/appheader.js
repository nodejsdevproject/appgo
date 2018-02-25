import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
class AppHeader extends Component {

  constructor()
  {
    super();
  }

  render() {
    console.log("test" + this.props.UIModel.appConfig.appLogo);
    return (
      <div className="App-header bg-dark">
          <img src={this.props.UIModel.appConfig.appLogo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
export default AppHeader;
