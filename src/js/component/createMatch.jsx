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
			<div className="container-fluid bg-light">
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
						<div className="day">
							<h4>Day:</h4>
							<div className="days">April 12, 2019</div>
						</div>
						<hr />
						<div className="games">
							<h4>Choose a game:</h4>
							<div className="row pt-4">
								<div className="col" id="radioForm">
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
								</div>
								<div className="col">
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
											Apex Legends
										</label>
									</div>
								</div>
								<div className="col">
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
											Fifa
										</label>
									</div>
								</div>
							</div>
						</div>
						<hr />
						<br />
						<h4 className="text ">Choose the console:</h4>
						<div className="row pt-4">
							<div className="col custom-radio" id="radioForm">
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
							<div className="col custom-radio pl-4">
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
							<div className="col custom-radio pl-4">
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
						<div className="terms text-center py-4">
							<input type="checkbox" name="terms" />
							<span> I Agree the Terms & Conditions</span>
							<br />
							<br />
							<Link className="link" to="/">
								<button
									type="button"
									className="btn btn-info"
									name="Display the match">
									Create a match
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
