import React, {Component} from 'react';
import {withAuth} from '../Context/AuthContext';

class Post extends Component {
	state = {
		komen_isi: '',
		komen_email: ''
	}

	handleChange = (e) => {
		const { name, value} = e.target
		this.setState({
			[name] : value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.komen(this.state)
	}

	render(){
		console.log(this.props.user);
		return(
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="span4 well">
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<textarea onChange={this.handleChange} value={this.state.komen_isi} className="span4" id="new_message" name="komen_isi" placeholder="Type in your message" rows="5"></textarea>
								</div>
								<button className="btn btn-info" type="submit">Post New Message</button>
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default withAuth(Post);
