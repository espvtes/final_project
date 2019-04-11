import React from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/index.css";
export class Score extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row py-4 bg-light">
					<div className="col-4" />
					<div
						className="col-4 shadow-lg p-3 mb-6 rounded"
						id="score">
						<div className="alert border border-secondary alert-primary text-center rounded">
							<h4>
								<ins>
									Please enter your PSN username to join
								</ins>
							</h4>
						</div>
						<br />
						<div className="row">
							<div className="col-sm-3" />
							<div className="col-6">
								<div className="chatBox rounded">
									<input
										type="text"
										placeholder="Your PSN"
										className="chat"
										id="chat"
									/>
								</div>
								<div className="button pt-4 text-center">
									<button
										type="submit"
										className="btn btn-success btn btn-sm">
										Enter
									</button>
								</div>
							</div>
							<div className="col-sm-3" />
						</div>
						<hr />
						<div
							className="alert alert-warning pt-4 text-center shadow p-3 mb-6 rounded "
							role="alert">
							<label>
								You have two hours for the match to be
								completed!!!
							</label>
						</div>
						<hr />
						<div className="row">
							<div className="col-sm-3" />
							<div className="col-6">
								<div className="score">
									<span>Score:</span>
									<select className="score px-2">
										<Context.Consumer>
											{({ store }) => {
												return store.score.map(
													(item, num) => {
														return (
															<option key={num}>
																{item}
															</option>
														);
													}
												);
											}}
										</Context.Consumer>
									</select>
								</div>
							</div>
							<div className="col-sm-3" />
						</div>

						<div className="subScore text-center pt-4">
							<button className=" btn btn-success" type="button">
								Submit score
							</button>
						</div>
					</div>
					<hr />
					<div className="col-4" />
				</div>
			</div>
		);
	}
}
