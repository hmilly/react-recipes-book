import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Burger from "./pages/Burger";
import Basket from "./pages/Basket";
import OrderComplete from "./pages/OrderComplete";
import Nav from "./components/Nav";
import AppContext from "./context/AppContext";
import { fetchAppData } from "./context/AppActions";
// json-server --watch db.json --port 8080

function App() {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch("SET_LOADING")
    const getAppData = async () => {
      const appData = await fetchAppData();
      dispatch({ type: "SET_APP_DATA", payload: appData });
    };
    getAppData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/menu/:id" element={<Burger />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/complete" element={<OrderComplete />} />
          <Route path="/recipe-book" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
