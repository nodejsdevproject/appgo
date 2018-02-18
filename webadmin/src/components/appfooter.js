import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
class AppFooter extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <footer className="App-footer bg-dark">
                    <p>Posted by: Hege Refsnes</p>
                    <h1>This is footer</h1>
                </footer>
            </div>
        );
    }
}

export default AppFooter;
