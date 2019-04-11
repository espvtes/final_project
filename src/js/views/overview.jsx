import React from "react";
import Cashout from "../../images/cashout.png";
import Controller from "../../images/controller.jpg";
import Typing from "../../images/typing.jpg";

export class Overview extends React.Component {
	render() {
		return (
			<div className="main" id="overview">
				<div className="row mx-5">
					<div className="col-4 card-text ml-5 mt-4 ">
						<img
							className="typing"
							src={Typing}
							alt="Card image cap"
						/>
						<div className="card-body mt-4 steps" id="s3">
							<h5 className="card-title">Step One</h5>
							<p className="card-text">
								<li>Sign up</li>
								<li>Create profile</li>
								<li>
									Add money through Paypal, Zelle, Apple Pay,
									and Google Wallet
								</li>
							</p>
							<a href="/sign_up" className="btn" id="step1">
								Sign Up
							</a>
						</div>
					</div>
					<div className="col-4 ml-4 mt-4">
						<img
							className="controller"
							src={Controller}
							alt="Card image cap"
						/>
						<div className="card-body mt-1 steps" id="s2">
							<h5 className="card-title">Step Two</h5>
							<p className="card-text">
								<li>Choose your console</li>
								<li>Choose your game</li>
								<li>Place your bet</li>
								<li>Find or wait for an opponent</li>
								<li>Play</li>
							</p>
							<a
								href="/matchCreate"
								className="btn mt-1"
								id="step2">
								Choose your game
							</a>
						</div>
					</div>
					<div className="col-3 mr-2 mt-4" id="third">
						<img
							className="cash"
							src={Cashout}
							alt="Card image cap"
						/>
						<div className="card-body mt-5 mb-3 steps" id="s3">
							<h5 className="card-title">Step Three</h5>
							<p className="card-text">
								<li>Go to your profile</li>
								<li>Cash out your winnings</li>
							</p>
							<a href="/profile" className="btn mt-4" id="step3">
								Cash out
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
