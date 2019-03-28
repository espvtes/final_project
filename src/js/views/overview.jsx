import React from "react";

export class Overview extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="row">
					<div className="col-3 card-text ml-5">
						<img
							className="card-img-top"
							src="http://placehold.it/150x150"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the cardntent.
							</p>
							<a href="/sign_up" className="btn btn-primary">
								Sign Up
							</a>
						</div>
					</div>
					<div className="col-3 card-text ml-5">
						<img
							className="card-img-top"
							src="http://placehold.it/150x150"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the cardntent.
							</p>
							<a href="/match" className="btn btn-primary">
								Choose your game
							</a>
						</div>
					</div>
					<div className="col-3 card-text ml-5">
						<img
							className="card-img-top"
							src="http://placehold.it/150x150"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the cardntent.
							</p>
							<a href="/profile" className="btn btn-primary">
								Cash out
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
