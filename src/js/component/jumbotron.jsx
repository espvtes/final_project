import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron  jumbotron-fluid  text-center">
				<h1 className="display-9">Got good game? Prove it.</h1>
				<h1 className="display-3">
					<b>Square Up</b>
				</h1>
				<p className="lead">
					Where gamers compete for bragging rights and digital
					currency.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="/match"
						role="button">
						Games, homie
					</a>
				</p>
			</div>
		);
	}
}
