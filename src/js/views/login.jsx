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
			<div className="container-fluid" id="login">
				<div className="row py-4">
					<div className="col-sm-4" />
					<div
						className="col-sm-4 text-center shadow p-6 mb-6 rounded"
						id="center">
						<form className="form-signin" id="ok">
							<h1 className="h3 mb-3 text-white font-weight-normal">
								Please sign in
							</h1>
							<br />
							<label htmlFor="inputEmail" className="sr-only">
								{this.props.email}
							</label>
							<input
								type="email"
								id="inputEmail"
								className="form-control form-control-lg"
								onChange={e =>
									this.setState({ email: e.target.value })
								}
								value={this.state.email}
								placeholder="Email address"
								required
							/>
							<br />
							<label htmlFor="inputPassword" className="sr-only">
								{this.props.password}
							</label>
							<input
								type="password"
								id="inputPassword"
								onChange={e =>
									this.setState({ password: e.target.value })
								}
								value={this.state.password}
								className="form-control form-control-lg"
								placeholder="Password"
								required
							/>
							<div className="checkbox mb-3 pt-4">
								<label>
									<input
										type="checkbox"
										value="remember-me"
									/>{" "}
									Remember me
								</label>
							</div>
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<button
											className="btn btn-lg btn-outline-warning btn-block"
											type="submit"
											onClick={() =>
												actions.loginForm(
													this.state.email,
													this.state.password
												)
											}>
											Sign in
										</button>
									);
								}}
							</Context.Consumer>
							<p className="mt-5 mb-3">© 2017-2019</p>
						</form>
					</div>
					<div className="col-sm-4" />
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	email: PropTypes.string,
	password: PropTypes.string
};
