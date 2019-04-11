import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import { Login } from "../views/login.jsx";

import { Profile } from "../views/profile.jsx";

import { Jumbotron } from "../component/jumbotron.jsx";
import { Popular } from "../component/popular.jsx";
import { Table } from "../component/table.jsx";

import { Context } from "../store/appContext.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron />
				<Popular />
				<Table id="id" />
			</div>
		);
	}
}
