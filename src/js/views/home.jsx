import React from "react";
import { Login } from "../views/login.jsx";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Home page!!</h1>
				<Login />
			</div>
		);
	}
}
