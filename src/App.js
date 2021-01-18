import React from "react";
import "./App.css";
import Footer from "./components/Footer"
import Main_content from "./components/Main_content"
import Main_head from "./components/Main_head"
import Nav from "./components/Nav"

function App() {
	return (
	<div className="app">
		<Nav/>
		<Main_head/>
		<Main_content/>
		<Footer/>
	</div>
	)
}

export default App;
