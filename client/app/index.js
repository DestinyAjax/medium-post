import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import Container from './components/Container/Container';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import store from '../redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';

const history = syncHistoryWithStore(browserHistory, store);

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Container}>
				<Route path="/login" component={Login}/>
				<Route path="/regiser" component={Register}/>
			</Route>
		</Router>
	</Provider>
), 
document.getElementById('app'));