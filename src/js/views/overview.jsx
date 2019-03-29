import React from "react";
import Cashout from "../../images/cashout.png";
import Controller from "../../images/controller.jpg";
import Typing from "../../images/typing.jpg";

export class Overview extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="row mx-5">
					<div className="col-3 card-text ml-5 mt-5">
						<img
							className="typing"
							src={Typing}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Step One</h5>
							<p className="card-text">
								<li>Sign up</li>
								<li>Create profile</li>
								<li>Link your cryptocurrency wallet</li>
							</p>
							<a href="/sign_up" className="btn btn-primary">
								Sign Up
							</a>
						</div>
					</div>
					<div className="col-3 mx-5">
						<img
							className="controller"
							src={Controller}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Step Two</h5>
							<p className="card-text">
								<li>Choose your console</li>
								<li>Choose your game</li>
								<li>Place your bet</li>
								<li>Find or wait for an opponent</li>
								<li>Play</li>
							</p>
							<a href="/match" className="btn btn-primary">
								Choose your game
							</a>
						</div>
					</div>
					<div className="col-3">
						<img
							className="card-img-top"
							src={Cashout}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Step Three</h5>
							<p className="card-text">
								<li>Go to your profile</li>
								<li>Cash out your winnings</li>
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
