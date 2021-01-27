import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer"
import Main_content from "./components/Main_content"
import Menu from "./components/Menu"
import Special_offer from "./components/Special_offer"
import Burger_elem from "./components/Burger_elem"
import Main_head from "./components/Main_head"
import Order_complete from "./components/Order_complete"
import Order_page from "./components/Order_page"

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
						<Main_head />
						<Menu />
						<Footer />
					</Route>
					<Route path="/basket">
						<Order_page />
						<Footer />
					</Route>
					<Route path="/">
						<Main_head />
						<Main_content />
						<Special_offer/>
						<Footer />
					</Route>
				</Switch>
			</div>
			</div>
		</Router>
	)
}

export default App;
