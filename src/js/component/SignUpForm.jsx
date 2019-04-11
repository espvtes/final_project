import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			user_name: "",
			email: "",
			password: "",
			months: "",
			days: "",
			year: ""
		};
	}
	render() {
		return (
			<div className="container-fluid" id="signUp">
				<div className="text-center pt-4">
					<img
						src="https://www.cookfood.net/Content/images/sign-up-title.png"
						className="rounded"
						alt="..."
						id="img"
					/>
				</div>
				<h4 className="text-white text-center pt-4">or</h4>
				<div className="text-center pt-4">
					<Link className="link" to="/login">
						<img
							src="https://www.loginbusiness.com/wp-content/uploads/2018/06/login-logo-web-transparent.png"
							className="rounded"
							alt="..."
							id="image"
						/>
					</Link>
				</div>
				<div className="row pt-2">
					<div className="col-sm-4" />
					<div className="col-sm-4" id="signForm">
						<form className="needs-validation" noValidate>
							<div className="pt-4">
								<label
									className="sign-form"
									htmlFor="first_name">
									{this.props.first_name}
								</label>
								<input
									className="form-control"
									type="text"
									onChange={e =>
										this.setState({
											first_name: e.target.value
										})
									}
									value={this.state.first_name}
									id="first_name"
									name="first_name"
									placeholder="First Name"
									required
								/>
							</div>
							<div className="pt-2">
								<label
									className="sign-form"
									htmlFor="last_name">
									{this.props.last_name}
								</label>
								<input
									className="form-control"
									type="text"
									id="last_name"
									name="last_name"
									onChange={e =>
										this.setState({
											last_name: e.target.value
										})
									}
									value={this.state.last_name}
									placeholder="Last Name"
									required
								/>
							</div>
							<div className="pt-2">
								<label className="sign-form" htmlFor="email">
									{this.props.email}
								</label>
								<input
									className="form-control"
									type="text"
									id="email"
									name="email"
									onChange={e =>
										this.setState({ email: e.target.value })
									}
									value={this.state.email}
									placeholder="Email Address"
									required
								/>
							</div>
							<div className="text pt-2">
								<label
									className="sign-form"
									htmlFor="user_name">
									{this.props.user_name}
								</label>
								<input
									className="form-control"
									type="text"
									id="user_name"
									name="user_name"
									onChange={e =>
										this.setState({
											user_name: e.target.value
										})
									}
									value={this.state.user_name}
									placeholder="Username"
									required
								/>
							</div>
							<div className="text pt-2">
								<label className="sign-form" htmlFor="password">
									{this.props.password}
								</label>
								<input
									className="form-control"
									type="text"
									id="password"
									name="password"
									onChange={e =>
										this.setState({
											password: e.target.value
										})
									}
									value={this.state.password}
									placeholder="Password"
									required
								/>
							</div>
							<div className="row pt-4">
								<div className="col">
									<label className="sign-form text-white">
										BirthDay:
									</label>
								</div>
								<div className="col">
									<select className="sign-form" required>
										<Context.Consumer>
											{({ store }) => {
												return store.months.map(
													(item, d) => {
														return (
															<option
																key={d}
																value={item}>
																{item}
															</option>
														);
													}
												);
											}}
										</Context.Consumer>
									</select>
								</div>
								<div className="col text-center">
									<select className="sign-form" required>
										<Context.Consumer>
											{({ store }) => {
												return store.days.map(
													(item, m) => {
														return (
															<option
																key={m}
																value={item}>
																{item}
															</option>
														);
													}
												);
											}}
										</Context.Consumer>
									</select>
								</div>
								<div className="col">
									<select
										className="sign-form float-right"
										required>
										<Context.Consumer>
											{({ store }) => {
												return store.year.map(
													(item, y) => {
														return (
															<option
																key={y}
																value={item}>
																{item}
															</option>
														);
													}
												);
											}}
										</Context.Consumer>
									</select>
								</div>
							</div>
							<div className="row py-4">
								<div className="col-sm-5" />
								<div className="col-sm-2">
									<div className="form-button ">
										<Context.Consumer>
											{({ store, actions }) => {
												return (
													<button
														type="submit"
														className="btn btn-outline-warning btn-full-width no-trans"
														onClick={e =>
															actions.addUser(
																this.state
																	.first_name,
																this.state
																	.last_name,
																this.state
																	.user_name,
																this.state
																	.email,
																this.state
																	.password,
																this.state.days,
																this.state
																	.months,
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
								<div className="col-sm-5" />
							</div>
						</form>
					</div>
					<div className="col-sm-4" />
				</div>
			</div>
		);
	}
}

SignUpForm.propTypes = {
	first_name: PropTypes.string,
	last_name: PropTypes.string,
	email: PropTypes.string,
	user_name: PropTypes.string,
	password: PropTypes.string
};
