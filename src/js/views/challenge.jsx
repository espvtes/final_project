import React from "react";
import PropTypes from "prop-types";
export class Challenge extends React.Component {
	constructor(props) {
		super(props);
		this.state = { size: 3 };
	}
	render() {
		return (
			<div className="container">
				<div className="text-center px-4" id="firsttab">
					<h2>Play Someone Now</h2>
					<table
						id={this.props.id}
						className="table text-center table-dark">
						<thead>
							<tr>
								<th scope="col">Player</th>
								<th scope="col">Game</th>
								<th scope="col">Amount</th>
								<th scope="col">Time</th>
							</tr>
						</thead>
						<tbody>
							<tr id="row1">
								<td>Player1</td>
								<td>Mortal Kombat 11</td>
								<td>$10</td>
								<td>whenever</td>
								<a
									role="button"
									href="/login"
									className="btn mt-2">
									Accept Challenge
								</a>
							</tr>
							<tr id="row2">
								<td>Player2</td>
								<td>The Divion</td>
								<td>$20</td>
								<td>whenever</td>
								<a
									role="button"
									href="/login"
									className="btn  mt-2">
									Accept Challenge
								</a>
							</tr>
							<tr id="row3">
								<td>Player3</td>
								<td>Call of Duty</td>
								<td>$35</td>
								<td>whenever</td>
								<a
									role="button"
									href="/login"
									className="btn  mt-2">
									Accept Challenge
								</a>
							</tr>
							<tr id="row4">
								<td>Player4</td>
								<td>The Division</td>
								<td>$300</td>
								<td>whenever</td>
								<a
									role="button"
									href="/login"
									className="btn mt-2">
									Accept Challenge
								</a>
							</tr>
							<tr id="row5">
								<td>Player5</td>
								<td>Call of Duty</td>
								<td>$125</td>
								<td>whenever</td>
								<a
									role="button"
									href="/login"
									className="btn mt-2 mb-4">
									Accept Challenge
								</a>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
Challenge.propTypes = {
	id: PropTypes.string
};
