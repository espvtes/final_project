import React from "react";
import "../../styles/index.css";
import Hulk from "../../images/Hulk.jpg";
import { Opengames } from "../component/opengames.jsx";

export class Profile extends React.Component {
	render() {
		return (
			<div className="container" id="profpage">
				<div className="row">
					<div className="col-4">
						<img src={Hulk} id="profpic" />
						<h3 className="pic mb-3">Hulkedout</h3>
					</div>
					<div className="col text-center">
						<h1>Welcome back, Hulkedout!</h1>
						<h2 className="balance mt-5"> Unmatched Games</h2>
						<div>
							<Opengames />
							<a
								role="button"
								href="/matchCreate"
								className="btn  mt-2">
								Create a Match
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
