import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import { Login } from "../views/login.jsx";
import { Match } from "../views/match.jsx";
import { Profile } from "../views/profile.jsx";

import { Carousel } from "../component/carousel.jsx";

import { Context } from "../store/appContext.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>It will be worth the wait!!!!</h1>
				<Carousel />
			</div>
		);
	}
}
