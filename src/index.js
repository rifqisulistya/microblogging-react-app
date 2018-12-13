import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Microblogging from './Microblogging'
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, browserHistory } from 'react-router'
import About from './components/About'
import Repos from './components/Repos'


var RouterApp = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
		</Route>
		<Route path="/microblogging" component={Microblogging}>
		</Route>
	</Router>
)
ReactDOM.render(RouterApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
