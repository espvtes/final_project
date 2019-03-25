import React from "react";

export class Sign_up extends React.Component {
	render() {
		return (
			<div className="text-center">
				<h1> Sign Up</h1>
				<form>
					<label>
						First Name:
						<input type="text" name="first name" />
					</label>
					<label>
						Last Name:
						<input type="text" name="name" />
					</label>
					
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
