import React from 'react';
import { render } from 'react-dom';

import Container from './components/Container';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';

render((
	<Container> 
		<App />
	</Container>
), 
document.getElementById('app'));