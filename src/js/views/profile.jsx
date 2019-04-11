import React from "react";
import "../../styles/index.css";
import Hulk from "../../images/Hulk.jpg";
import { Table_prof } from "../component/table_prof.jsx";
import { Optionmenu } from "../component/optionmenu.jsx";

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
						<h2 className="balance mt-5"> Account Balance</h2>
						<h3 className="account">$250</h3>
						<Table_prof />
						<div>
							<h3>Add Funds</h3>
							<Optionmenu />
							<h3>Withdraw Funds</h3>
							<Optionmenu />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
