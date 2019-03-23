import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class Login extends React.Component {
	render() {
		return (
			<div>
				<div className="site-block gamertag-form">
					<div className="mmGamertagForm ghost-form">
						<h4 className="modal-title">
							Enter your email and Username to join
						</h4>
						<p>You’ll create a Players’ Lounge username later</p>{" "}
						<div className="gamertag-wrapper">
							<span className="gamertag-input-label">
								Your Email
							</span>
							<textarea
								type="text"
								id="email-input"
								name="email"
								className="form-control"
							/>
						</div>
						<div className="gamertag-wrapper">
							<span className="gamertag-input-label">
								Your PSN Username
							</span>
							<textarea
								data-gamertag-label="PSN Username"
								id="gamertag-input"
								name="playstation-tag"
								className="form-control"
							/>
							<p className="pool-error" />
						</div>
						<div className="confirm-ghost-signup-section">
							<label>
								<input
									type="checkbox"
									name="confirm-ghost-signup"
								/>
								I agree that checking this box confirms I am
								above 18 and do not have another Players Lounge
								account.
							</label>
						</div>
						<button
							type="button"
							className="site-btn link-btn gamertagFindOpponentBtn"
							data-gamertag-key="playstation">
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}
