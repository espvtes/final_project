import React from "react";

export class Displayed extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-3" />
				<div className="col-6">
					<div className="alert bg-light" role="alert">
						<h2 className="alert-heading text-center">
							Successfully!!!
						</h2>
						<hr />
						<div className="row alertBody">
							<div className="col">
								<h6>Game:</h6>
								<label>Call of duty</label>
								<hr />
							</div>
							<div className="col">
								<h6>Console:</h6>
								<label>Play Station 4</label>
								<hr />
							</div>
						</div>

						<div className="row alertBody">
							<div className="col">
								<h6>Rules:</h6>
								<p>
									The rules was selected and cannot be
									changed.
								</p>
								<hr />
							</div>
							<div className="col">
								<h6>Wager:</h6>
								<label>$10.00</label>
								<hr />
							</div>
						</div>
						<div className="button text-center">
							<button type="button" className="btn btn-info">
								Join
							</button>
						</div>
					</div>
				</div>
				<div className="col-3" />
			</div>
		);
	}
}
