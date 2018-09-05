import React, { Component } from 'react';
import Items from './utils/navItems';

const NavBar = () => {
	return (
		<div>
			<div className="nav-scroller py-1 mb-2">
		        <nav className="nav d-flex justify-content-between">
		          {
		          	Items.map((item,index) => {
		          		return (
		          			<a key={item.id} className="p-2 text-muted" href="#">{ Items[index].name }</a>
		          		);
		          	})
		          }
		        </nav>
		    </div>
		</div>
	);
}

export default NavBar;