import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';

const Container = ({children}) => {
	return (
		<div>
			<div className="container">
				<Header />
				<NavBar />
				<main>
					{ children }
				</main>
				
				<Footer />
			</div>
		</div>
	);
}

export default Container;