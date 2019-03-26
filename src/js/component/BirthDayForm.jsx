import React from "react";
import { Context } from "../store/appContext.jsx";

export class BirthDayForm extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor="start">BirthDay: </label>

				<input
					type="date"
					id="start"
					name="trip-start"
					defaultValue=""
					min="1900-01-01"
					max="2025-01-01"
				/>
			</div>
		);
	}
}
