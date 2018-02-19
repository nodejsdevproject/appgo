import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
class AppRightcontent extends Component {
    constructor() {
        super();
        this.state = {}
    }
    
    componentDidMount() {
        this.props.onRef(this)
      }
      componentWillUnmount() {
        this.props.onRef(undefined)
      }

    LoadContent(content)
    {
        this.setState({Content:content}, function(){
            console.log("Load content done!")
        });
    }

    render() {
        if (this.state.Content) {
            return (
                <div className="App-rightcontent  bg-danger">
                    {this.state.Content}
                </div>
            );
          }
          return (
            <div className="App-rightcontent  bg-danger">
               Loading...
            </div>
        );
    }
}

export default AppRightcontent;
