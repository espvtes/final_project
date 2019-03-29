import React from "react";
import Cashout from "../../images/cashout.png";
import Controller from "../../images/controller.jpg";
import Typing from "../../images/typing.jpg";

export class Overview extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="row">
					<div className="col-3 card-text ml-5">
						<img
							className="card-img-top"
							src={Typing}
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
							src={Controller}
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
							src={Cashout}
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
