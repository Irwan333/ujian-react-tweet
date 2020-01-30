import React from 'react';
import {withAuth} from '../Context/AuthContext';

function Status(props) {
	return (
		props.isLoggedIn ? <button onClick={props.logout}> Logout </button>
		: <button onClick="#"> Login </button>
	)
}

export default withAuth(Status);