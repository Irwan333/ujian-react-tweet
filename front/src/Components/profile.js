import React, {Component} from 'react';
import {withAuth} from '../Context/AuthContext';
import User from './user';

class Profile extends Component{
	render(){
		return(
			<React.Fragment>
				<User />
			</React.Fragment>
		)
}
}

export default withAuth(Profile);