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
import Burger from "./components/Burger"

import BurgerElem from "./components/BurgerElem"
import OrderComplete from "./components/OrderComplete"


// json-server --watch db.json --port 3004

// export const createNewTweet = async (user) => {
//     const configObject = await {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify({
//             userId: parseInt(whichUserId.id),
//             content: `${msg}`,
//             likes: 0,
//             retweets: 0,
//             date: `${currentDate}`,
//         }),
//     };
//     await fetch(`${API_ENDPOINT}/tweets`, configObject)
//         .then((res) => (res.ok ? res.json() : "Oops we couldn't update that!"))
//         .catch((error) => console.log(error));
// };




function App() {


	return (
		<Router>
			<div className="route">
				<div className="app">
					<ul className="nav">
						<li>
							<Link className="nav_link" to="/">ON THE MENU</Link>
						</li>
						<li>
							<Link className="nav_link" to="/menu">RECIPES</Link>
						</li>
						<li>WINE</li>
						<li>GIFTS</li>
						<li>MARKET</li>
						<li>
							<Link to="/basket">
								<img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
							</Link>
						</li>
					</ul>
					<Switch>
						<Route path="/menu">
							<MainHead />
							<Menu Burger={Burger}/>
							<Footer />
						</Route>
						<Route path="/basket">
							<OrderPage/>
							<Footer />
						</Route>
						<Route path="/burgerCard">
							<MainHead />
							<BurgerElem/>
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
			</div>
		</Router>
	)
}

export default App;
