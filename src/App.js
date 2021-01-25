import React from "react";
import "./App.css";
import Footer from "./components/Footer"
import Main_content from "./components/Main_content"
import Menu from "./components/Menu"
import Special_offer from "./components/Special_offer"
import Burger_elem from "./components/Burger_elem"
import Main_head from "./components/Main_head"
import Nav from "./components/Nav"
import Order_complete from "./components/Order_complete"
import Order_page from "./components/Order_page"

function App() {
	return (
		<div className="app">

		<Order_page/>
		<Footer/>
	</div>
	)
}

export default App;
