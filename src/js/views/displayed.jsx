import React from "react";

export class Displayed extends React.Component {
	render() {
		return (
			<div className="display">
				<div className="row">
					<div className="col-sm-3" />
					<div className="col-sm-6 text-center">
						<div>
							<h1>Successfully!!!!</h1>
						</div>
						<h4>The match was created</h4>
					</div>
					<div className="col-sm-3" />
				</div>
			</div>
		);
	}
}
