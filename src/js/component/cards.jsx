import React from "react";
import PropTypes from "prop-types";

export class Cards extends React.Component {
	render() {
		return (
			<div className="main my-5 text-center">
				<div className="col-md-4 text-secondary mb-5">
					<img
						className="rounded-circle py-0"
						src={this.props.src}
						alt="Card image cap"
					/>
					<div className="card-body py-0">
						<h2 className="card-title">{this.props.title}</h2>
						<p className="card-text pb-3">{this.props.content}</p>
					</div>
					<a
						href="#"
						className="btn btn-secondary .btn-outline-light">
						<div>View details {">"}</div>
					</a>
				</div>
			</div>
		);
	}
}
	

	Cards.propTypes = {
	title: PropTypes.string,
	src: PropTypes.string,
	content: PropTypes.string
};
