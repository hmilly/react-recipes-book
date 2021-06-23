import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Menu from "./components/Menu"
import SpecialOffer from "./components/SpecialOffer"
import MainHead from "./components/MainHead"
import OrderPage from "./components/OrderPage"
import Burgers from "./components/Burgers"
import Nav from "./components/Nav"
import UserForm from "./components/UserForm"
import Burger from "./components/Burger"
import OrderComplete from "./components/OrderComplete"


function App() {
	return (
		<Router>
			<div className="app">
				<Nav />
				<Switch>
					<Route path="/menu">
						<MainHead />
						<Menu Burgers={Burgers} />
						<Footer />
					</Route>
					<Route path="/basket">
						<OrderPage UserForm={UserForm} />
						<Footer />
					</Route>
					<Route path="/burgerCard">
						<Burger />
						<SpecialOffer />
						<Footer />
					</Route>
					<Route path="/complete">
						<OrderComplete />
						<Footer />
					</Route>
					<Route path="/">
						<MainHead />
						<MainContent />
						<SpecialOffer />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App;