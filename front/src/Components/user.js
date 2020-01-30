import React, {Component} from 'react';
import {withAuth} from '../Context/AuthContext';
import Status from './status';
import Header from '../Pages/header';
import Post from '../Pages/post';

class User extends Component{
	componentDidMount(){
		this.props.initUser()
	}
	render()
	{
		return (
			<React.Fragment>
				<Header />
				<Post />
				<h2>
				{this.props.user.email}
				</h2>
				<hr/>
				<Status />
			</React.Fragment>
		)
	}
}

export default withAuth(User);