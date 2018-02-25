import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'
import BootstrapTable from 'react-bootstrap-table-next';

class AppRightcontent extends Component {
    constructor() {
        super();
        this.state = {};
        this.columns = [{
            dataField: '_id',
            text: 'ID'
          }, {
            dataField: 'name',
            text: '姓名'
          }, {
            dataField: 'username',
            text: '用户名'
          }];
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    // The parent will pass the value in menu. Here we need figure out how to load content by the value
    // Most of time the value will be start with api
    LoadContent(content) {
        // We need load the content base on the menu value. 
        // The result could be array also could be single object. both of them we need a nice way to present it
        console.log("start load content from :" + content); 
        $.ajax({
            url: process.env.REACT_APP_WEB_API_URL + "api/user",
            dataTyoe: 'json',
            cache: false,
            crossDomain: true,
            success: function (data) {
              console.log("Load data done:" + data);
              this.setState({ Content: data }, function () {
                console.log("bind data done!");
              });
              // Translate the date from local.Why? We need the ability to dynamic translate. So if you change the lanauge later. 
              // We don't need access the server by http request. That is why. 
            }.bind(this),
            error: function (xrh, status, err) {
              console.log(err);
            }
          })
    }

    ItemClicked() {
        console.log('this is:', this);
        // Ask the father open a dailog for me. And display 'this'.
         this.props.OpenDialog('test');
    }

    render() {
        if (this.state.Content) {
            if(Array.isArray(this.state.Content))
            {
                // Render as tabler
                return(
                    <div className="App-rightcontent  bg-light">
                        <BootstrapTable keyField='_id' data={ this.state.Content }  columns={ this.columns } />
                    </div>
                );
            }
            else   
            {   // Render as single object
                return (
                    <div className="App-rightcontent  bg-light">
                        {this.state.Content}
                    </div>
                );
            }


           
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
