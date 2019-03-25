import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

import "../../styles/index.css";

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}
	render() {
		return (
			<div className="login">
				<form className="form-signin text-center">
					<img
						className="mb-4"
						src="http://thinkler.in/images/login-user-icon.png"
						alt=""
						width="78"
						height="78"
					/>
					<h1 className="h3 mb-3 text-dark font-weight-normal">
						Please login
					</h1>
					<label htmlFor="inputEmail" className="sr-only">
						{this.props.email}
					</label>
					<input
						type="email"
						onChange={e => this.setState({ email: e.target.value })}
						id="inputEmail"
						className="email"
						placeholder="Email address"
						value={this.state.email}
						required=""
						autoFocus=""
					/>
					<label htmlFor="inputPassword" className="sr-only">
						{this.props.password}
					</label>
					<input
						type="password"
						onChange={e =>
							this.setState({ password: e.target.value })
						}
						id="inputPassword"
						className="password"
						value={this.state.password}
						placeholder="Password"
						required=""
					/>
					<div className="checkbox mb-3 py-4 text-dark text-center">
						<label>
							<input type="checkbox" value="remember-me" />{" "}
							Remember me
						</label>
					</div>
					<button
						className="btn btn-lg px-5 btn-outline-success btn-block"
						type="submit">
						Login
					</button>
					<p className="mt-5 mb-3 text-center text-muted">
						© 2017-2019
					</p>
				</form>
			</div>
		);
	}
}

Login.propTypes = {
	email: PropTypes.string,
	password: PropTypes.string
};
