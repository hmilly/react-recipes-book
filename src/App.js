import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Menu from "./components/Menu"
import SpecialOffer from "./components/SpecialOffer"
import MainHead from "./components/MainHead"
import OrderPage from "./components/OrderPage"

import BurgerElem from "./components/BurgerElem"
import OrderComplete from "./components/OrderComplete"

function App() {
	return (
		<Router>
			<div className="route">
			<div className="app">
				<ul className="nav">
					<li>
						<Link  className="nav_link" to="/">ON THE MENU</Link>
					</li>
					<li>
						<Link  className="nav_link" to="/menu">RECIPES</Link>
					</li>
					<li>WINE</li>
					<li>GIFTS</li>
					<li>MARKET</li>
					<li>
						<Link to="basket">
							<img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
						</Link>
					</li>
				</ul>
				<Switch>
					<Route path="/menu">
						<MainHead />
						<Menu/>
						<Footer />
					</Route>
					<Route path="/basket">
						<OrderPage />
						<Footer />
					</Route>
					<Route path="/">
						<MainHead />
						<MainContent />
						<SpecialOffer/>
						<Footer />
					</Route>
				</Switch>
			</div>
			</div>
		</Router>
	)
}

export default App;
