import React, {Component} from 'react';
import axios from "axios";

const axiosReq = axios.create()
const AuthContext = React.createContext()

axiosReq.interceptors.request.use(function (config) {
	const token = localStorage.getItem('token');
	// console.log(token);
	config.headers.Authorization = token
	return config;
},

function (error) {
	// Do something with request error
	return Promise.reject(error);
});

export class AuthContextProvider extends Component {
	constructor() {
		super()
		this.state = {
			users: [],
			user: localStorage.getItem('user') || {},
			token: localStorage.getItem('token')  || "",
			isLoggedIn:(localStorage.getItem('token') === null) ? false : true
		}
	}

	initUser = () => {
		return axiosReq.get("http://localhost:8000/api/profile")
		.then(response => {
			this.setState({
				user:response.data
			});
			return response;
		})
	}

	// login
	login = (credentials) => {
		return axiosReq.post("http://localhost:8000/api/login", credentials)
		.then(response => {
			const {token} = response.data;
			localStorage.setItem('token', token)

			this.setState({
				token,
				isLoggedIn: true
			})

			if (!token) {
				alert('Email atau Password Salah')
			}
			else{
				return console.log(response);
			}
		})
	}

	// logout
	logout = () => {
		localStorage.removeItem('token')

		this.setState({
			isLoggedIn: false
		})

		return console.log('logout');
	}

	komen = () => {
		const userObject = {
            komen_isi: this.state.komen_isi,
            komen_email : this.state.komen_email
        };

        return axios.post('http://localhost:8000/api/komen', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ komen_isi: '', komen_email: ''})
	}

	render() {
		return (
			<AuthContext.Provider value = {{
				login:this.login,
				logout:this.logout,
				initUser:this.initUser,
				...this.state
			}}>
			{this.props.children}
			</AuthContext.Provider>
		)
	}
}

// higher order Component

export const withAuth = (WrappedComponent) => {
	return class extends Component{
		render() {
			return(
				<AuthContext.Consumer>
				{
					(context) => (
						<WrappedComponent {...this.props} {...context} />
					)
				}
				</AuthContext.Consumer>
			)
		}
	}
}