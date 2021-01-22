import React from "react";
import "./App.css";
import Footer from "./components/Footer"
import Main_content from "./components/Main_Content"
import Main_head from "./components/Main_Head"
import Nav from "./components/Nav"

function App() {
	return (
	<div className="app">
		<Nav/>
		<Main_Head/>
		<Main_Content/>
		<Footer/>
	</div>
	)
}

export default App;
