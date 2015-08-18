import './stylesheets/main.css';
import React from 'react';
import App from './components/App';
import routes from './routes';
import Router from 'react-router';

main();

function main() {
	let app = document.createElement('div');
	app.id = "node";
	document.body.appendChild(app);
	Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, app);
 });
}