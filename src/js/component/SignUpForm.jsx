import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import "../../styles/index.css";

export class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			username: "",
			password: "",
			days: "",
			months: "",
			year: ""
		};
	}

	render() {
		return (
			<div className="container">
				<form className="needs-validation" noValidate>
					<div className="py-5 text-center">
						<img
							className="d-block mx-auto mb-4"
							src="https://www.theworkperk.com/wp-content/uploads/2016/11/sing-up.png"
							alt=""
							width="150"
							height="150"
						/>
						<h2>Sign up</h2>
					</div>
					<div className="row ">
						<div className="col-sm-3" />
						<div className="col-sm-6">
							<div className="group-form">
								<label
									className="sr-only"
									htmlFor="signup_popup_firstname">
									{this.props.first_name}
								</label>
								<input
									type="text"
									onChange={e =>
										this.setState({
											first_name: e.target.value
										})
									}
									className="form-control"
									name="signup_popup_firstname"
									id="signup_popup_firstname"
									placeholder="First Name"
									value={this.state.first_name}
									required
								/>
							</div>
						</div>
						<div className="col-sm-3" />
					</div>
					<div className="row">
						<div className="col-sm-3" />
						<div className="col-sm-6">
							<div className="group-form py-4">
								<label
									className="sr-only"
									htmlFor="signup_popup_lastname">
									{this.props.last_name}
								</label>
								<input
									type="text"
									onChange={e =>
										this.setState({
											last_name: e.target.value
										})
									}
									className="form-control"
									name="signup_popup_lastname"
									id="signup_popup_lastname"
									placeholder="Last Name"
									value={this.state.last_name}
									required
								/>
							</div>
						</div>
						<div className="col-sm-3" />
					</div>
					<div className="row">
						<div className="col-sm-3" />
						<div className="col-sm-6">
							<div className="group-form">
								<label
									className="sr-only"
									htmlFor="signup_popup_email">
									{this.state.email}
								</label>
								<input
									type="text"
									onChange={e =>
										this.setState({
											email: e.target.value
										})
									}
									className="form-control"
									name="signup_popup_email"
									id="signup_popup_email"
									placeholder="Email Address"
									value={this.state.email}
									required
								/>
							</div>
						</div>
						<div className="col-sm-3" />
					</div>
					<div className="row">
						<div className="col-sm-3" />
						<div className="col-sm-6">
							<div className="group-form py-4">
								<label
									className="sr-only"
									htmlFor="signup_popup_username">
									{this.props.username}
								</label>
								<input
									type="text"
									onChange={e =>
										this.setState({
											username: e.target.value
										})
									}
									className="form-control"
									name="signup_popup_username"
									id="signup_popup_username"
									placeholder="Username"
									value={this.state.username}
									required
								/>
							</div>
						</div>
						<div className="col-sm-3" />
					</div>
					<div className="row">
						<div className="col-sm-3" />
						<div className="col-sm-6">
							<div className="group-form">
								<label
									className="sr-only"
									htmlFor="signup_popup_password">
									{this.props.password}
								</label>
								<input
									type="text"
									onChange={e =>
										this.setState({
											password: e.target.value
										})
									}
									className="form-control"
									name="signup_popup_password"
									id="signup_popup_password"
									placeholder="Password"
									value={this.state.password}
									required
								/>
							</div>
						</div>
						<div className="col-sm-3" />
					</div>
					<div className="row py-4">
						<div className="col-sm-3" />
						<div className="col-sm-3">
							<label>BrithDay:</label>
						</div>
						<div className="col-sm-3">
							<select className="form-control pull-left" required>
								<Context.Consumer>
									{({ store }) => {
										return store.months.map((item, d) => {
											return (
												<option key={d} value={item}>
													{item}
												</option>
											);
										});
									}}
								</Context.Consumer>
							</select>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3" />
						<div className="col-sm-3">
							<select className="form-control pull-left">
								<Context.Consumer>
									{({ store }) => {
										return store.days.map((item, d) => {
											return (
												<option key={d} value={item}>
													{item}
												</option>
											);
										});
									}}
								</Context.Consumer>
							</select>
						</div>
						<div className="col-sm-3">
							<select className="form-control pull-right">
								<Context.Consumer>
									{({ store }) => {
										return store.year.map((item, d) => {
											return (
												<option key={d} value={item}>
													{item}
												</option>
											);
										});
									}}
								</Context.Consumer>
							</select>
						</div>
					</div>
					<div className="row py-4">
						<div className="col-sm-3" />
						<div className="col-sm-6">
							<div className="form-button ">
								<Context.Consumer>
									{({ store, actions }) => {
										return (
											<button
												id="signup"
												type="submit"
												className="btn btn-info btn-full-width no-trans"
												onClick={e =>
													actions.addUser(
														this.state.first_name,
														this.state.last_name,
														this.state.username,
														this.state.password,
														this.state.days,
														this.state.months,
														this.state.year
													)
												}>
												Sign Up
											</button>
										);
									}}
								</Context.Consumer>
							</div>
						</div>
						<div className="col-sm-3" />
					</div>
				</form>
			</div>
		);
	}
}

SignUpForm.propTypes = {
	first_name: PropTypes.string,
	last_name: PropTypes.string,
	email: PropTypes.string,
	username: PropTypes.string,
	password: PropTypes.string
};
