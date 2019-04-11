import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export class Optionmenu extends React.Component {
	render() {
		return (
			<div className="container justify-content-center">
				<div className="row justify-content-center" id="option">
					<div className="col mt-4 pt-3 text-center">
						<select className="custom-select text-center ">
							<option selected>Choose</option>
							<option value="1">Paypal</option>
							<option value="2">Zelle</option>
							<option value="3">Apple Pay</option>
							<option value="3">Google Wallet</option>
						</select>
					</div>
					<div className="col text-center mb-1 pb-2">
						<form>
							<div className="form-group mb-5">
								<h4>Amount</h4>
								<input
									type="Amount"
									className="form-control mb-5"
									id="amount"
									aria-describedby="emailHelp"
									placeholder="Amount"
								/>
							</div>
						</form>
					</div>
					<div className="mt-1">
						<a
							className="btn  mt-4"
							href="www.paypal.com/login"
							role="button">
							Submit
						</a>
					</div>
				</div>
			</div>
		);
	}
}
