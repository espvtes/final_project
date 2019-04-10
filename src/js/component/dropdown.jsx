import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export class Dropdown extends React.Component {
	state = {
		isOpen: false
	};

	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
		return (
			<div className="dropdown" onClick={this.toggleOpen}>
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true">
					Choose A currency
					<div
						className={menuClass}
						aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#nogo">
							Bitcoin
						</a>
						<a className="dropdown-item" href="#nogo">
							Litecoin
						</a>
						<a className="dropdown-item" href="#nogo">
							Dogecoin
						</a>
					</div>
				</button>
			</div>
		);
	}
}
