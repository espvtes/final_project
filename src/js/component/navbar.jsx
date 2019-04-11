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
			<nav className="navbar navbar-dark bg-dark mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Square Up</span>
				</Link>
				<div className="mr-auto">
					<Link className="ml-3" to="/overview">
						<button
							className="btn btn btn-outline-dark text-white"
							id="nav1">
							How it works
						</button>
					</Link>

					<Link className="pl-4" to="/matchesForm">
						<button className="btn btn btn-outline-dark text-white">
							Join a Match
						</button>
						</Link>
					<Link className="pl-4" to="/playNow">
						<button className="btn">Join a Match</button>
					</Link>
				</div>
				<div className="ml-auto" id="jump_to_me">
					<Link className="mr-2" to="/sign_up">
						<button
							className="btn btn-outline-dark text-white"
							id="nav3">
							Sign up
						</button>
					</Link>
					<Link to="/login">
						<button
							className="btn btn btn-outline-dark text-white"
							id="nav4">
							Login
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	hreftarget: PropTypes.string
};
