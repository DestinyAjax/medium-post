import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Container from './components/Container';
import App from './components/App';

const store = createStore();

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';

render((
	<Provider store={store}>
		<Container> 
			<App />
		</Container>
	</Provider>
), 
document.getElementById('app'));