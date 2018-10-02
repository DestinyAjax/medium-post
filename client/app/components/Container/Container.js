import React, { Component } from 'react';
import { push } from 'connected-react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

class Container extends Component {
	constructor() {
		super();
		this.state = {
			is_logged_in: false
		}
	}

	render() {
		return (
			<div>
				<div className="container">
					<div>
						<Header />
						<NavBar />
						<main>
							<Home />
							<Route exact path="/login" component={Login} />
      						<Route exact path="/register" component={Register} />
						</main>
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default Container;