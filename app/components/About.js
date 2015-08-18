import React from 'react';

export default class About extends React.Component {
constructor(props) {
		super(props);
		//ThemeManager.setTheme(ThemeManager.types.DARK);
	}

  componentWillMount() {
  	
  }

	render() {
		return(
             <div>
             <h1>About me page</h1>
             </div>
			);
	}
}