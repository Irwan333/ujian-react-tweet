import React, {Component} from 'react';
import {withAuth} from '../Context/AuthContext';
import {Redirect} from 'react-router-dom';
import Header from '../Pages/header';

class Login extends Component {
	state = {
		email:"",
		password:""
	}

	handleChange = (e) => {
		const { name, value} = e.target
		this.setState({
			[name] : value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state)
	}

	render(){

		if (this.props.isLoggedIn) {
			if (this.props.token) {
				return <Redirect push to='/profile' />
			}
		}
		return(
			<React.Fragment>
				<Header />
				<form onSubmit={this.handleSubmit} className="container col-6">
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
							<input onChange={this.handleChange} value={this.state.email} name="email" type="email" id="exampleInputEmail1" className="form-control" placeholder="Email" />
						<small id="emailHelp" className="form-text text-muted">never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input id="exampleInputPassword1" onChange={this.handleChange} value={this.state.password} name="password" type="password" className="form-control" placeholder="Password" />
					</div>
					<div className="row justify-content-center">
						<div className="col-4">
							<button type="submit" className="btn btn-primary btn-block">Log In</button>
						</div>

					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default withAuth(Login);