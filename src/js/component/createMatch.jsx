import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export class CreateMatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
	}

	handleCheckboxChange = event =>
		this.setState({ checked: event.target.checked });

	render() {
		return (
			<div className="container" id="fondo">
				<div className="row pt-4">
					<div className="col-sm-2" />
					<div
						className="col-sm-8 shadow p-3 mb-5 rounded"
						id="create">
						<h1>Create a match</h1>
						<hr />
						<br />
						<div className="game">
							<label className="font-weight-light">
								Chosen game
							</label>
							<div className="row">
								<div className="col game">
									<label>Fifa</label>
								</div>
								<div className="col edit-game">
									<Link
										className="change text-decoration-none"
										to="/pickUp">
										<span className="icon">
											<i className="fas fa-edit" />
										</span>
										<span className="change-game">
											Changhe game
										</span>
									</Link>
								</div>
								<div className="col" />
							</div>
						</div>
						<hr />
						<br />
						<h6 className="console font-weight-light">
							Choose the console
						</h6>
						<br />
						<div className="row">
							<div className="col-sm-3">
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label
										className="form-check-label"
										htmlFor="inlineRadio1">
										PlayStation 4
									</label>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="form-check form-check-inline ">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label
										className="form-check-label"
										htmlFor="inlineRadio1">
										Xbox one
									</label>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="form-check form-check-inline ">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label
										className="form-check-label"
										htmlFor="inlineRadio1">
										Xbox(controller)
									</label>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label
										className="form-check-label"
										htmlFor="inlineRadio1">
										PC
									</label>
								</div>
							</div>
						</div>
						<hr />
						<br />
						<div className="wager">
							<h6 className="font-weight-light">Your wager</h6>
						</div>
						<br />
						<div className="row">
							<div className="col-3">
								<div className="form-check form-check-inline ">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label
										className="form-check-label"
										htmlFor="inlineRadio1">
										$2.00
									</label>
								</div>
							</div>
							<div className="col-3">
								<div className="form-check form-check-inline ">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label
										className="form-check-label"
										htmlFor="inlineRadio1">
										$5.00
									</label>
								</div>
							</div>
							<div className="col-3">
								<div className="form-check form-check-inline ">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label
										className="form-check-label"
										htmlFor="inlineRadio1">
										$10.00
									</label>
								</div>
							</div>
							<div className="col-3">
								<div className="form-check form-check-inline ">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label
										className="form-check-label"
										htmlFor="inlineRadio1">
										$20.00
									</label>
								</div>
							</div>
						</div>
						<hr />
						<br />
						<div className="rules">
							<label className="text font-weight-light">
								Game rules
							</label>
							<p>
								Following Rules and Regulations in the Army
								There are many reasons in that in this world we
								have rules, regulations, laws, traffic signs,
								and other means of directions that individuals
								must follow for various reasons. Without the
								utmost care to follow these rules, things that
								could easily be prevented may happen, resulting
								in very negative things. This however, is even
								more important when in the Army, as the
								consequences can be very severe. The Army has a
								plethora of rules and regulations that all… Show
								More
							</p>
						</div>
						<hr />
						<div className="terms text-center">
							<input type="checkbox" name="terms" />
							<span> I Agree the Terms & Conditions</span>
							<br />
							<br />
							<Link className="display" to="/displayed">
								<button
									type="button"
									className="btn btn-outline-info"
									name="Display the match">
									Display the match
								</button>
							</Link>
						</div>
					</div>
					<div className="col-sm-2" />
				</div>
			</div>
		);
	}
}
