import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateUsers } from '../../../redux/actions/loginAction'
import './Login.css';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
	}
	
	onSubmit(e) {
		e.preventDefault();
		const data = {
			password: this.state.password,
			email: this.state.email
		};

		this.props.authenticateUsers(data);
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 offset-md-4">
							<div className="card">
								<div className="card-header">
									<h3>Login Page</h3>
								</div>
								<div className="card-body">
									<form onSubmit={this.onSubmit.bind(this)}>
										<div className="form-group">
											<label>Email Address</label>
											<input 
												type="email" name="email" 
												className="form-control" 
												placeholder="Email Address" 
												onChange={this.onChange.bind(this)}
												value={this.state.email}
											/>
										</div>
										<div className="form-group">
											<label>Password</label>
											<input 
												type="password" name="password" 
												className="form-control" placeholder="Password"
												onChange={this.onChange.bind(this)}
												value={this.state.password} 
											/>
										</div>
										<div className="form-group">
											<button className="btn btn-info btn-sm">Login</button>
										</div>
									</form>
								</div>
								<div className="card-footer">
									<p><Link to="/">Return Home</Link></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	authenticateUsers: propTypes.func.isRequired
}

export default connect(null, { authenticateUsers })(Login);