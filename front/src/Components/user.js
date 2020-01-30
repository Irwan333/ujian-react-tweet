import React, {Component} from 'react';
import {withAuth} from '../Context/AuthContext';
import Status from './status';
import Header from '../Pages/header';
import Post from '../Pages/post';
import Komentars from '../Pages/komen';
import axios from 'axios';

class User extends Component{
	constructor(props) {
		super(props);
		this.state = {
			post : []
		}
		console.log('apel');

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
		this.props.initUser()

		let ayam = this;
		console.log('ayam');

		axios.get('http://localhost:8000/api/komen')
		.then(function (response) {
			// handle success
			console.log(response);
			ayam.setState({
				post : response.data.response
			})
		})
		.catch(function (error) {
			// handle error
			console.log('persik');
			console.log(error);
		})
		.finally(function () {
			// always executed
		});
	}
	render()
	{
		return (
			<React.Fragment>
				<Header />

				<div className="row">
					{
						this.state.post.map(
							komentar => {
							return <div key={komentar._id} className="col-md-3">
							<Komentars komentar = {komentar.komen_isi} />
							</div>
						})
					}
				</div>
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
