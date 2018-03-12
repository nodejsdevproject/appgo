import React, { Component } from 'react';
import AppHeader from './components/appheader'
import AppFooter from './components/appfooter'
import AppLeftmenu from './components/appleftmenu'
import AppRightcontent from './components/apprightcontent'
import $ from 'jquery';
import AppModalDialog from './components/appmodaldialog';
import LocalizedStrings from 'react-localization';
import './helper'
import { translateObject } from './helper';
import { translateEntitySchema } from './helper';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



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
      url: process.env.REACT_APP_WEB_API_URL + "api/uimodel",
      dataTyoe: 'json',
      cache: false,
      crossDomain: true,
      success: function (uiModel) {
        console.log("Load ui done:" + uiModel); // Load the appConfig form server.
        this.state.uiModel = uiModel;

        // Use the default lanuage to render the page. If you pick another lanuage. you can call the follow line to change it.
        this.setState({
          uiModel: {
            appConfig: this.getTranslatedAppConfig(this.state.uiModel.appConfig.defaultLanguage),
            entitySchema: this.getTranslatedEntitySchema(this.state.uiModel.appConfig.defaultLanguage),
          },
        });
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
    return translateObject(this.state.uiModel.LocalizedStrings, lang, this.state.uiModel.appConfig);
  }

  getTranslatedEntitySchema = (lang) => {
    return translateEntitySchema(this.state.uiModel.LocalizedStrings, lang, this.state.uiModel.entitySchema);
  }

  recursion(dataSource) {
    return (
      dataSource.map((menu, index) => {
        if (menu.children) {
          return (
            <SubMenu key={menu.key} title={menu.title}>
              {this.recursion(menu.children)}
            </SubMenu>
          )
        } else {
          return (<Menu.Item key={menu.key}>{menu.title}</Menu.Item>)
        }
      })
    )
  }

  render() {
    // We get everything then start render. Idealy each compoenent shoud have it own config/model
    if (this.state.uiModel) {
      return (
        // <div className="App">
        //   <AppHeader UIModel={this.state.uiModel} />
        //   <AppLeftmenu MenuClicked={this.menuClicked} UIModel={this.state.uiModel} />
        //   {/* tell the child I allow you open dailog. */}
        //   <AppRightcontent OpenDialog={this.openDialog} onRef={ref => (this.appRightcontent = ref)}  UIModel={this.state.uiModel} />
        //   <AppFooter />
        //   {/* I will update the content once you tell me what need dispaly. This way we only refresh the content part. */}
        //   <AppModalDialog onRef={ref => (this.appModalDialog = ref)} />
        // </div>


        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              {
                this.recursion(this.state.uiModel.appConfig.headerMenu.items)
              }
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
               {
                this.recursion(this.state.uiModel.appConfig.leftMenu.items)
              }
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                Content
            </Content>
            </Layout>
          </Layout>
        </Layout>
      );
    }
    return <div className="App-loader"></div>;
  }
}

export default App;
