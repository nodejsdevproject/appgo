import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import 'react-sidemenu/dist/react-sidemenu.min.css'
import {SideMenu} from "react-sidemenu"

class AppLeftmenu extends Component {
    constructor() {
        super();

        this.state = {
            items : [
                { divider: true, label: 'Main navigation', value: 'main-nav' },
                {
                    label: 'item 1', value: 'item1', icon: 'fa-search',
                    children: [
                        {
                            label: 'item 1.1', value: 'item1.1', icon: 'fa-snapchat',
                            children: [
                                { label: 'item 1.1.1', value: 'item1.1.1', icon: 'fa-anchor' },
                                { label: 'item 1.1.2', value: 'item1.1.2', icon: 'fa-bar-chart' }]
                        },
                        { label: 'item 1.2', value: 'item1.2' }]
                },
                {
                    label: 'item 2', value: 'item2', icon: 'fa-automobile',
                    children: [
                        {
                            label: 'item 2.1', value: 'item2.1',
                            children: [
                                { label: 'item 2.1.1', value: 'item2.1.1' },
                                { label: 'item 2.1.2', value: 'item2.1.2' }]
                        },
                        { label: 'item 2.2', value: 'item2.2' }]
                },
                { divider: true, label: 'Motors', value: 'motors-nav' },
                { label: 'item 3', value: 'item3', icon: 'fa-beer' }
            ]
        }
    }

    render() {
        return (
            <div className="App-leftmenu">
                <SideMenu items={this.state.items} />
            </div>
        );
    }
}


export default AppLeftmenu;
