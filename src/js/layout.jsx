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
import { MatchCreate } from "./views/matchCreate.jsx";
import { Displayed } from "./views/displayed.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/overview" component={Overview} />
						<Route path="/matches" component={Match} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/login" component={Login} />
						<Route path="/match" component={Match} />
						<Route path="/sign_up" component={Sign_up} />
						<Route path="/matchCreate" component={MatchCreate} />
						<Route path="/displayed" component={Displayed} />

						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
