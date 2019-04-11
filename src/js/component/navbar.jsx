import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-dark mb-3">
				<Link to="/">
					<span className="navbar-brand .text-info mb-0 h1">
						Square Up
					</span>
				</Link>
				<div className="mr-auto">
					<Link className="ml-3" to="/overview">
						<button className="btn btn-primary">
							How it works
						</button>
					</Link>

					<Link className="pl-4" to="/">
						<button
							className="btn btn-primary"
							href={this.props.hreftarget}>
							Join a Match
						</button>
					</Link>
				</div>
				<div className="ml-auto" id="jump_to_me">
					<Link className="mr-2" to="/sign_up">
						<button className="btn btn-primary">Sign up</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	hreftarget: PropTypes.string
};
