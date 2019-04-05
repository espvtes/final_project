import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<footer className="footer mt-auto py-3 text-center">
				<p>This is the bottom, brah.</p>
				<a target="#jump_to_me">
					<i className="fa fa-arrow-circle-up" />
				</a>
			</footer>
		);
	}
}
