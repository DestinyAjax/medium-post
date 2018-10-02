import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUsers } from '../../../redux/actions/registerAction'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            fullName: '',
            username: '',
            isRegister: false
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
        
        const user = {
            fullName: this.state.fullname,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };

        this.props.registerUsers(user);
    }

    render() {
        return (
            <div >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12 col-md-4 offset-md-4">
                            <center><h3>Registration Page</h3></center><hr/>
                            { this.state.isRegister ? <div className="alert alert-success">Registration successful</div>: <div></div>}

                            <form onSubmit={this.onFormSubmit.bind(this)}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input 
                                        type="text" name="fullname" 
                                        className="form-control" value={this.state.fullname} 
                                        placeholder="Provide Full Name" 
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" 
                                        className="form-control" value={this.state.username} 
                                        placeholder="Username"
                                        onChange={this.onChange.bind(this)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" name="email" 
                                        className="form-control" value={this.state.email} 
                                        placeholder="Email Address"
                                        onChange={this.onChange.bind(this)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="password" type="password" 
                                        className="form-control" value={this.state.password} 
                                        placeholder="Password" 
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-info btn-sm">Register</button>
                                </div>
                            </form>
                            <p><Link to="/">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUsers: propTypes.func.isRequired
}

export default connect(null, { registerUsers })(Register);