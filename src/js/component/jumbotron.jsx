import React from "react";
import Fight1 from "../../images/fight1.gif";
import { Link } from "react-router-dom";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron  jumbotron-fluid  text-center image-responsive shadow rounded">
				<h1 className="display-9">Got good game? Prove it.</h1>
				<h1 className="display-3">
					<b>Square Up</b>
				</h1>
				<p className="lead" id="compete">
					<b>Where gamers compete for bragging rights and cash.</b>
				</p>
				<p className="lead">
					<a
						className="btn btn-lg"
						id="homebtn"
						href="/challenge"
						role="button">
						Matchup
					</a>
				</p>
			</div>
		);
	}
}
