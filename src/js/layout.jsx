import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import { Login } from "./views/login.jsx";
import { Overview } from "./views/overview.jsx";
import { Match } from "./views/match.jsx";
import { Sign_up } from "./views/sign_up.jsx";
import { Matchcreate } from "./views/matchcreate.jsx";

import { Joinmatch } from "./views/joinmatch.jsx";
import { Score } from "./views/score.jsx";
import { PlayNow } from "./views/playNow.jsx";
import { PlayNowTwo } from "./views/playnowtwo.jsx";
import { PlayNowThree } from "./views/playnowthree.jsx";
import { PlayNowFour } from "./views/playnnowfour.jsx";

import { Profile } from "./views/profile.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar href="#id" />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/overview" component={Overview} />
						<Route path="/match" component={Match} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/login" component={Login} />
						<Route path="/profile" component={Profile} />
						<Route path="/match" component={Match} />
						<Route path="/sign_up" component={Sign_up} />
						<Route path="/matchCreate" component={Matchcreate} />

						<Route path="/joinmatch" component={Joinmatch} />
						<Route path="/score" component={Score} />
						<Route path="/playNow" component={PlayNow} />
						<Route path="/playnowtwo" component={PlayNowTwo} />
						<Route path="/playNowthree" component={PlayNowThree} />
						<Route path="/playnowfour" component={PlayNowFour} />

						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
