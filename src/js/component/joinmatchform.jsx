import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Modal } from "../component/modal.jsx";

export class Joinmatchform extends React.Component {
	render() {
		return (
			<div className="container mt-5">
				<form role="form">
					<div className="row mt-5 justify-content-center">
						<div className="form-group col-lg-5 text-center mt-5">
							<label
								htmlFor="code"
								id="psn"
								className="psnlabel text-center mt-5">
								<b>Enter your Playstation Network username</b>
							</label>
							<input type="text" className="form-control mt-5" />
						</div>
					</div>
					<div className="row justify-content-center">
						<button
							type="submit"
							className="btn btn-default"
							data-toggle="modal"
							data-target="#startgame">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
