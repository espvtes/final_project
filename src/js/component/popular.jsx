import React from "react";

export class Popular extends React.Component {
	render() {
		return (
			<div className="text-cente container">
				<h1>
					<b>Popular Games</b>
				</h1>
				<div className="row">
					<div className="col">
						<div className="card1" />
						<div className="card-body">
							<h5 className="card-title text-center">
								CALL OF DUTY
							</h5>
						</div>
						<div className="card-footer text-center">
							<a
								role="button"
								href="/login"
								className="btn btn-success">
								Play Now!
							</a>
						</div>
					</div>
					<div className="col">
						<div className="card2" />
						<div className="card-body">
							<h5 className="card-title text-center">FIFA</h5>
						</div>
						<div className="card-footer text-center">
							<a
								role="button"
								href="/login"
								className="btn btn-success">
								Play Now
							</a>
						</div>
					</div>
					<div className="col">
						<div className="card3" />
						<div className="card-body">
							<h5 className="card-title text-center">
								BASKETBALL
							</h5>
						</div>
						<div className="card-footer text-center">
							<a
								role="button"
								href="/login"
								className="btn btn-success">
								Play Now
							</a>
						</div>
					</div>
					<div className="col">
						<div className="card4" />
						<div className="card-body">
							<h5 className="card-title text-center">BASEBALL</h5>
						</div>
						<div className="card-footer text-center">
							<a
								role="button"
								href="/login"
								className="btn btn-success">
								Play Now
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
