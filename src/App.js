import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Burger from "./pages/Burger";
import Basket from "./pages/Basket";
import OrderComplete from "./pages/OrderComplete";
import Nav from "./components/Nav";
import store from "./context/appContext";
// json-server --watch db.json --port 8080

function App() {
  const { getUsers, getAllBurgers } = useContext(store);

  useEffect(() => {
    getAllBurgers();
    getUsers();
  }, []);

  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/menu/:id" element={<Burger />}></Route>
          <Route path="/basket" element={<Basket />} />
          <Route path="/complete" element={<OrderComplete />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
