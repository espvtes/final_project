import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import { Login } from "./views/login.jsx";
import { Overview } from "./views/overview.jsx";
import { Sign_up } from "./views/sign_up.jsx";
import { MatchCreate } from "./views/matchCreate.jsx";

import { Joinmatch } from "./views/joinmatch.jsx";
import { Score } from "./views/score.jsx";
import { PlayNow } from "./views/playNow.jsx";

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
						<Route path="/matches" component={Match} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/login" component={Login} />
						<Route path="/profile" component={Profile} />
						<Route path="/sign_up" component={Sign_up} />
						<Route path="/matchCreate" component={MatchCreate} />

						<Route path="/joinmatch" component={Joinmatch} />
						<Route path="/score" component={Score} />
						<Route path="/playNow" component={PlayNow} />

						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
