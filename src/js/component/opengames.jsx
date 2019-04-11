import React from "react";
import PropTypes from "prop-types";

export class Opengames extends React.Component {
	constructor(props) {
		super(props);
		this.state = { size: 3 };
	}
	render() {
		return (
			<div className="text-center" id="open">
				<table
					id={this.props.id}
					className="table text-center table-dark">
					<thead>
						<tr>
							<th scope="col">Game</th>
							<th scope="col">Amount</th>
							<th scope="col">Status</th>
						</tr>
					</thead>
					<tbody>
						<tr id="row1">
							<td>FIFA</td>
							<td>$100</td>
							<td>Awaiting Competitor</td>
						</tr>
						<tr id="row2">
							<td>Apex</td>
							<td>$200</td>
							<td>Awaiting Competitor</td>
						</tr>
						<tr id="row3">
							<td>Call of Duty</td>
							<td>$150</td>
							<td>Awaiting Competitor</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
Opengames.propTypes = {
	id: PropTypes.string
};
