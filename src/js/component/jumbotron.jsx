import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron  jumbotron-fluid ">
				<h1 className="display-3">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
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
