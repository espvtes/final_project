import React from "react";

export class Table_prof extends React.Component {
	constructor(props) {
		super(props);
		this.state = { size: 3 };
	}
	render() {
		return (
			<div>
				<table className="table text-center table-dark">
					<thead>
						<tr>
							<th scope="col">Date</th>
							<th scope="col">Transaction</th>
							<th scope="col">Balance</th>
						</tr>
					</thead>
					<tbody>
						<tr id="row">
							<td>April 11, 2019</td>
							<td>won $20</td>
							<td>$250</td>
						</tr>
						<tr id="row">
							<td>April 5, 2019</td>
							<td>lost $10</td>
							<td>$230</td>
						</tr>
						<tr id="row3">
							<td>April 1, 2019</td>
							<td>withdrew $100</td>
							<td>$240</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
