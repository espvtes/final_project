import React from "react";
import { Link } from "react-router-dom";
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
							className="typing rounded"
							src={Typing}
							alt="Card image cap"
						/>
						<div className="card-body mt-4 steps" id="s3">
							<h5 className="card-title text-white">Step One</h5>
							<p className="card-text text-white">
								<li>Sign up</li>
								<li>Create profile</li>
								<li>
									Add money through Paypal, Zelle, Apple Pay,
									and Google Wallet
								</li>
							</p>
							<a
								href="/sign_up"
								className="btn btn-dark"
								id="step1">
								Sign Up
							</a>
						</div>
					</div>
					<div className="col-4 ml-4 mt-4">
						<img
							className="controller rounded"
							src={Controller}
							alt="Card image cap"
						/>
						<div className="card-body mt-1 steps" id="s2">
							<h5 className="card-title text-white">Step Two</h5>
							<p className="card-text text-white">
								<li>Choose your console</li>
								<li>Choose your game</li>
								<li>Place your bet</li>
								<li>Find or wait for an opponent</li>
								<li>Play</li>
							</p>
							<Link className="step2" to="/matchCreate">
								<button
									href="/match"
									className="btn btn-dark mt-1"
									id="step2">
									Choose your game
								</button>
							</Link>
						</div>
					</div>
					<div className="col-3 mr-2 mt-4" id="third">
						<img
							className="cash rounded"
							src={Cashout}
							alt="Card image cap"
						/>
						<div className="card-body mt-5 mb-3 steps" id="s3">
							<h5 className="card-titlem text-white">
								Step Three
							</h5>
							<p className="card-text text-white">
								<li>Go to your profile</li>
								<li>Cash out your winnings</li>
							</p>
							<a
								href="/profile"
								className="btn btn-dark mt-4"
								id="step3">
								Cash out
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
