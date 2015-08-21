import React from 'react';
import Navbar from './Navbar';
import {RouteHandler} from 'react-router';
let injectTapEventPlugin = require("react-tap-event-plugin");
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let RaisedButton = mui.RaisedButton;
injectTapEventPlugin();

export default class App extends React.Component {
	constructor(props) {
		super(props);
		//ThemeManager.setTheme(ThemeManager.types.DARK);
	}

	  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
  	ThemeManager.setTheme(ThemeManager.types.LIGHT);
  }

	render() {
		return(
             <div>
             <Navbar/>
               <RouteHandler/>
             </div>
			);
	}
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};