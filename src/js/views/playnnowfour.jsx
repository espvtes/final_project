import React from "react";
import { Link } from "react-router-dom";

export class PlayNowFour extends React.Component {
	render() {
		return (
			<div className="container-fluid py-4">
				<div className="row text-white">
					<div className="col-3" />
					<div
						className="col-6 shadow p-3 mb-6 rounded border border-secondary text-white"
						id="play">
						<div className="title">
							<h4>Open Matches Right Now:</h4>
						</div>
						<table
							className="table border border-secondary shadow p-3 mb-6 rounded text-white"
							id="table">
							<thead className="thead text-white" id="thead">
								<tr>
									<th scope="col">Player</th>
									<th scope="col">Game</th>
									<th scope="col">Amount</th>
									<th scope="col">Time</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Player</th>
									<td>Apex Legends</td>
									<td>$10</td>
									<td>Whenever</td>
									<td>
										<Link className="join" to="/score">
											<button
												type="submit"
												id="playButton"
												className="btn btn-warning border border-dark">
												Join the match
											</button>
										</Link>
									</td>
								</tr>
								<tr>
									<th scope="row">Player</th>
									<td>fifa</td>
									<td>$50</td>
									<td>Whenever</td>
									<td>
										<Link className="join" to="/score">
											<button
												type="submit"
												className="btn btn-warning border border-dark">
												Join the match
											</button>
										</Link>
									</td>
								</tr>
								<tr>
									<th scope="row">Player</th>
									<td>fortnite</td>
									<td>$80</td>
									<td>Whenever</td>
									<td>
										<Link className="join" to="/score">
											<button
												type="submit"
												className="btn btn-warning border border-dark">
												Join the match
											</button>
										</Link>
									</td>
								</tr>
								<tr>
									<th scope="row">Player</th>
									<td>fortnite</td>
									<td>$40</td>
									<td>Whenever</td>
									<td>
										<Link className="join" to="/score">
											<button
												type="submit"
												className="btn btn-warning border border-dark">
												Join the match
											</button>
										</Link>
									</td>
								</tr>
								<tr>
									<th scope="row">Player</th>
									<td>fortnite</td>
									<td>$20</td>
									<td>Whenever</td>
									<td>
										<Link className="join" to="/score">
											<button
												type="submit"
												className="btn btn-warning border border-dark">
												Join the match
											</button>
										</Link>
									</td>
								</tr>
								<tr>
									<th scope="row">Player</th>
									<td>fifa</td>
									<td>$120</td>
									<td>Whenever</td>
									<td>
										<Link className="join" to="/score">
											<button
												type="submit"
												className="btn btn-warning border border-dark">
												Join the match
											</button>
										</Link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-3" />
				</div>
			</div>
		);
	}
}
