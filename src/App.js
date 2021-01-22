import React from "react";
import "./App.css";
import Footer from "./components/Footer"
import Main_Content from "./components/Main_Content"
import Menu from "./components/Menu"
import Special_offer from "./components/Special_offer"
import Burger_elem from "./components/Burger_elem"
import Main_Head from "./components/Main_Head"
import Nav from "./components/Nav"

function App() {
	return (
	<div className="app">
		<Nav/>
		<Main_Head/>
		<Menu/>
		<Burger_elem/>
		<Special_offer/>
		<Footer/>
	</div>
	)
}

export default App;
