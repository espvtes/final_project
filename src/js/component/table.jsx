import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = { size: 3 };
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="text-center px-2 py-4" id="firsttab">
					<div className="text-center text-light">
						<h2>Play Someone Now</h2>
					</div>
					<br />
					<table
						id={this.props.id}
						className="table text-center py-4 table-dark shadow rounded text-white">
						<thead>
							<tr>
								<th scope="col">Player</th>
								<th scope="col">Game</th>
								<th scope="col">Amount</th>
								<th scope="col">Time</th>
							</tr>
						</thead>
						<tbody>
							<tr id="row3">
								<td>Player3</td>
								<td>Apex Legends</td>
								<td>$35</td>
								<td>whenever</td>
								<Link className="call" to="/score">
									<button
										role="button"
										href="/score"
										className="btn  mt-2 btn btn-warning">
										Accept Challenge
									</button>
								</Link>
							</tr>
							<tr id="row4">
								<td>Player4</td>
								<td>Fifa</td>
								<td>$300</td>
								<td>whenever</td>
								<Link className="the" to="/score">
									<button
										role="button"
										href="/score"
										className="btn mt-2 btn btn-warning">
										Accept Challenge
									</button>
								</Link>
							</tr>
							<tr id="row5">
								<td>Player5</td>
								<td>Fortnite</td>
								<td>$125</td>
								<td>whenever</td>
								<Link className="call" to="/score">
									<button
										role="button"
										href="/score"
										className="btn mt-2 mb-4 btn btn-warning">
										Accept Challenge
									</button>
								</Link>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
Table.propTypes = {
	id: PropTypes.string
};
