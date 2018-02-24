import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import 'bootstrap/dist/js/bootstrap.min'
import Form from "react-jsonschema-form"; // This is modal dialog. We need it display form data

class AppModalDialog extends Component {
    constructor() {
        super();
        this.state = {
            schema : {
                title: "Todo",
                type: "object",
                required: ["title"],
                properties: {
                  title: {type: "string", title: "Title", default: "A new task"},
                  done: {type: "boolean", title: "Done?", default: false}
                }
            }
        }
    }

    
      

    componentDidMount() {
         this.props.onRef(this)
    }
    componentWillUnmount() {
         this.props.onRef(undefined)
    }

    LoadContent(content) {
        this.setState({ Content: Date.now.toString() }, function () {
            console.log("Load content to the dialog done!")
        });
    }
   
    render() {
        //if (this.state.Content) {
            return (
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.state.Content}
                                <Form schema={this.state.schema}
                                    onChange={console.log("changed")}
                                    onSubmit={console.log("submitted")}
                                    onError={console.log("errors")} />
                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            );
        //}
    }
}

export default AppModalDialog;
