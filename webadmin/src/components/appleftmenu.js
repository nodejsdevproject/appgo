import React, { Component } from 'react';
import '../App.css';
import 'react-sidemenu/dist/react-sidemenu.min.css'
import {SideMenu} from "react-sidemenu"

class AppLeftmenu extends Component {
    constructor() {
        super();
        this.state = {        }
    }

    componentDidMount()
    {
    }

    componentWillMount()
    {   
        // overwrite the text by the LocalizedStrings
        
    }

    MenuClicked(item)
    {
        // Let the parent know we need load the content
        this.props.MenuClicked(item.value);
    }

    render() {
        return (
            <div className="App-leftmenu">
                <SideMenu items={this.props.Config.leftMenu.items} theme='custom' onMenuItemClick={(value) => this.MenuClicked({value})} />
            </div>
        );
    }
}


export default AppLeftmenu;
