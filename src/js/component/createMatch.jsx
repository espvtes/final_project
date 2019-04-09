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
			<div className="container-fluid">
				<div className="row py-4">
					<div className="col-sm-3" />
					<div
						className="col-sm-6 shadow p-3 mb-6 rounded"
						id="formCreate">
						<div className="pt-4">
							<h1 className="title badge-pill badge-info">
								Match options:
							</h1>
						</div>
						<hr />
						<br />
						<div className="games">
							<h4>Choose a game:</h4>
							<div className="row pt-4">
								<div className="col-sm-3" id="radioForm">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Basketball
										</label>
									</div>
									<div className="form-check pt-4">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Bowling
										</label>
									</div>
									<div className="form-check pt-4">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Starcraft
										</label>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Call of duty
										</label>
									</div>
									<div className="form-check pt-4">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Fifa
										</label>
									</div>
									<div className="form-check pt-4">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Baseball
										</label>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Fortnite
										</label>
									</div>
									<div className="form-check pt-4">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Apex Legends
										</label>
									</div>
									<div className="form-check pt-4">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Rummy
										</label>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Doom
										</label>
									</div>
									<div className="form-check pt-4">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Poker
										</label>
									</div>
									<div className="form-check pt-4">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadios"
											id="exampleRadios1"
											value="option1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleRadios1">
											Billiards
										</label>
									</div>
								</div>
							</div>
						</div>
						<hr />
						<br />
						<h4 className="text ">Choose the console:</h4>
						<div className="row pt-4">
							<div
								className="col-sm-3 custom-radio"
								id="radioForm">
								<input
									type="radio"
									id="customRadioInline1"
									name="customRadioInline1"
									className="custom-control-input"
								/>
								<label
									className="custom-control-label"
									htmlFor="customRadioInline1">
									Play Station 4
								</label>
							</div>
							<div className="col-sm-3 custom-radio pl-4">
								<input
									type="radio"
									id="customRadioInline2"
									name="customRadioInline2"
									className="custom-control-input"
								/>
								<label
									className="custom-control-label"
									htmlFor="customRadioInline2">
									Xbox one
								</label>
							</div>
							<div className="col-sm-3 custom-radio pl-4">
								<input
									type="radio"
									id="customRadioInline3"
									name="customRadioInline3"
									className="custom-control-input"
								/>
								<label
									className="custom-control-label"
									htmlFor="customRadioInline3">
									Xbox (controller)
								</label>
							</div>
							<div className="col-sm-3 custom-radio pl-4">
								<input
									type="radio"
									id="customRadioInline4"
									name="customRadioInline4"
									className="custom-control-input"
								/>
								<label
									className="custom-control-label"
									htmlFor="customRadioInline4">
									PC
								</label>
							</div>
						</div>
						<hr />

						<h4 className="wager">Your wager:</h4>
						<div className="row pt-4">
							<div
								className="col-sm-3 custom-radio"
								id="radioForm">
								<input
									type="radio"
									id="customRadioInline5"
									name="customRadioInline5"
									className="custom-control-input"
								/>
								<label
									className="custom-control-label"
									htmlFor="customRadioInline5">
									$2.00
								</label>
							</div>
							<div className="col-sm-3 custom-radio pl-4">
								<input
									type="radio"
									id="customRadioInline6"
									name="customRadioInline6"
									className="custom-control-input"
								/>
								<label
									className="custom-control-label"
									htmlFor="customRadioInline6">
									$5.00
								</label>
							</div>
							<div className="col-sm-3 custom-radio pl-4">
								<input
									type="radio"
									id="customRadioInline7"
									name="customRadioInline7"
									className="custom-control-input"
								/>
								<label
									className="custom-control-label"
									htmlFor="customRadioInline7">
									$10.00
								</label>
							</div>
							<div className="col-sm-3 custom-radio pl-4">
								<input
									type="radio"
									id="customRadioInline8"
									name="customRadioInline8"
									className="custom-control-input"
								/>
								<label
									className="custom-control-label"
									htmlFor="customRadioInline8">
									$20.00
								</label>
							</div>
						</div>
						<hr />
						<h4>Rules:</h4>
						<div className="row pt-4" id="p">
							<p className="text-justify">
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
						<div className="terms text-center py-4">
							<input type="checkbox" name="terms" />
							<span> I Agree the Terms & Conditions</span>
							<br />
							<br />
							<Link className="link" to="/displayed">
								<button
									type="button"
									className="btn btn-info"
									name="Display the match">
									Display the match
								</button>
							</Link>
						</div>
					</div>
					<div className="col-sm-6" />
				</div>
			</div>
		);
	}
}
