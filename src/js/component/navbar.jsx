import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Square Up</span>
				</Link>
				<div className="mr-auto">
					<Link className="ml-3" to="/overview">
						<button className="btn" id="nav1">
							How it works
						</button>
					</Link>
					<Link className="ml-5" to="/matches">
						<button className="btn" id="nav2">
							Join a Match
						</button>
					</Link>
				</div>
				<div className="ml-auto" id="jump_to_me">
					<Link className="mr-2" to="/sign_up">
						<button className="btn" id="nav3">
							Sign up
						</button>
					</Link>
					<Link to="/login">
						<button className="btn" id="nav4">
							Login
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}
