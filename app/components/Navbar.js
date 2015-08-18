import React from 'react';
import {Link} from 'react-router';
let injectTapEventPlugin = require("react-tap-event-plugin");
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let FlatButton = mui.FlatButton;
let AppBar = mui.AppBar;
let { MenuItem, LeftNav, Styles } = require('material-ui');
let Router = require('react-router');
injectTapEventPlugin();

let menuItems = [
    { route: 'get-started', text: 'Get Started' },
    { route: 'customization', text: 'Customization' },
    { route: 'components', text: 'Components' },
    { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
    { type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
    { type: MenuItem.Types.LINK, payload: 'http://facebook.github.io/react', text: 'React' },
    { type: MenuItem.Types.LINK, payload: 'https://www.google.com/design/spec/material-design/introduction.html', text: 'Material Design' }
  ];
 let {
  DropDownIcon,
  DropDownMenu,
  FontIcon,
  RaisedButton,
  IconButton,
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} = mui;

export default class Navbar extends React.Component {
constructor(props, context) {
		super(props, context);
		//ThemeManager.setTheme(ThemeManager.types.DARK);
	//this.toggle = this.toggle.bind(this);
    this._showLeftNavClick = this._showLeftNavClick.bind(this);
    this._toggleDockedLeftNavClick = this._toggleDockedLeftNavClick.bind(this);

	}

  static contextTypes = {
        router: React.PropTypes.func
    }
  
  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
  	ThemeManager.setTheme(ThemeManager.types.LIGHT);

  }

  transition = () => {
  	this.context.router.transitionTo('Projects');
  }

   transition2 = () => {
  	this.context.router.transitionTo('About');
  }

   transition3 = () => {
  	window.location.href = "http://github.com/kkotwal94";
  }

  _showLeftNavClick() {
    this.refs.leftNav.toggle();
  }

  _toggleDockedLeftNavClick() {
    this.refs.dockedLeftNav.toggle();
    this.setState({
      isDocked: !this.state.isDocked
    });
  }

	render() {
		 let filterOptions = [
      { payload: '1', text: 'All Broadcasts' },
      { payload: '2', text: 'All Voice' },
      { payload: '3', text: 'All Text' },
      { payload: '4', text: 'Complete Voice' },
      { payload: '5', text: 'Complete Text' },
      { payload: '6', text: 'Active Voice' },
      { payload: '7', text: 'Active Text' },
    ];
    let iconMenuItems = [
      { payload: '1', text: 'Resume' },
      { payload: '2', text: 'Contact Info' }
    ];
		return(
             <div style = {{width: '100%', marginTop: '-7px', position: 'relative'}}>
             
               <Toolbar style = {{backgroundColor: '#2196f3'}}>
          <ToolbarGroup key={0} float="left">
            <ToolbarTitle text="Karan Kotwal" onClick = {this.toggle} />
            <FontIcon className="muidocs-icon-custom-github" tooltip="GitHub"/>
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right">
            <ToolbarTitle text="Navigate" />
            
            <DropDownIcon iconClassName="muidocs-icon-navigation-expand-more" menuItems={iconMenuItems} />
            <ToolbarSeparator/>
            <RaisedButton label="Projects" primary={true} onClick ={this.transition}/>
          <RaisedButton label="About Me" primary={true} onClick ={this.transition2}/>
            <RaisedButton label="Github" primary={true} onClick ={this.transition3}/>
          </ToolbarGroup>
        </Toolbar>
             
             </div>
			);
	}
}

Navbar.childContextTypes = {
  muiTheme: React.PropTypes.object
};

/**

<AppBar
               title="Karan Kotwal" 
               style={{
                 backgroundColor: '#2196f3',
                 width: '100%',
               }}/>

<div className = "navbar-buttons">
               <RaisedButton label="Projects" primary ={true}
               style={{
               	backgroundColor :'#2196f3',
               	marginRight: '60px'

               }}/>
               <RaisedButton label="About" primary={true}
               style={{
               	backgroundColor :'#2196f3',
               	marginRight: '60px'
               }}/>
               <RaisedButton label="Github" primary={true}
               style = {{
               	backgroundColor :'#2196f3',
               	marginRight: '60px'
               }}/>
               </div>

               //dropdown
               <DropDownMenu menuItems={filterOptions} style = {{backgroundColor: '#2196f3'}}/>
               **/