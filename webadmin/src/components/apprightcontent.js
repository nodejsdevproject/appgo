import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'

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

    LoadContent(content) {
        this.setState({ Content: content }, function () {
            console.log("Load content done!")
        });
    }

    ItemClicked() {
        console.log('this is:', this);
        // Ask the father open a dailog for me. And display 'this'.
         this.props.OpenDialog('test');
    }

    render() {
        if (this.state.Content) {
            return (
                <div className="App-rightcontent  bg-light">
                    {this.state.Content}
                </div>
            );
        }
        return (
            <div className="App-rightcontent  bg-light">
                Loading...
                <button type="button" onClick={(value) => this.ItemClicked({value})}
                    className="btn btn-primary" data-toggle="modal">
                    Open modal
                </button>
            </div>
        );
    }
}

export default AppRightcontent;
