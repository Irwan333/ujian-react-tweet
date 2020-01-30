import React from 'react';
import {Link} from 'react-router-dom';
import {withAuth} from '../Context/AuthContext';
import Buttons from './button';

function Header(props) {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand navbar-light bg-white">
				<div className="container">
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link to="" className="nav-link">
									<i className="fa fa-twitter"></i>
								</Link>
							</li>
						</ul>
						<form action="" className="form-inline w-100 d-none d-md-block ml-2">
							<input type="text" className="form-control form-control-sm rounded-pill search border-0 px-3 w-100" placeholder="Search Twitter" />
						</form>
						<Buttons />
					</div>
				</div>
			</nav>
		</React.Fragment>
	)
}

export default withAuth(Header);