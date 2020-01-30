import React, {Component} from 'react';
import {withAuth} from '../Context/AuthContext';
import {Redirect} from 'react-router-dom';

class Buttons extends Component {
	render(){

		if (this.props.isLoggedIn) {
			if (this.props.token) {
				return <Redirect push to='/profile' />
			}
		}
		return(
			<React.Fragment>
				<button type="button" className="btn btn-outline-primary kuda">Login</button>
			</React.Fragment>
		);
	}
}

export default withAuth(Buttons);