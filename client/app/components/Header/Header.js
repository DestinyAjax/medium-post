import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => {
	return (
		<div>
			<header className="blog-header py-3">
		        <div className="row flex-nowrap justify-content-between align-items-center">
		          <div className="col-4 pt-1">
		            <Link className="text-muted" to="/register">Subscribe</Link>
		          </div>
		          <div className="col-4 text-center">
		            <span className="blog-header-logo text-dark">My Dev Blog</span>
		          </div>
		          <div className="col-4 d-flex justify-content-end align-items-center">
		            <Link to="/login" className="btn btn-sm btn-outline-secondary">Log In</Link>
		          </div>
		        </div>
		     </header>
		</div>
	);
}

export default Header;