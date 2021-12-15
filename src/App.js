import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Menu from "./components/Menu";
import SpecialOffer from "./components/SpecialOffer";
import MainHead from "./components/MainHead";
import OrderPage from "./components/OrderPage";
import Nav from "./components/Nav";
import Burger from "./components/Burger";
import OrderComplete from "./components/OrderComplete";
// json-server --watch db.json --port 8080

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/menu"
            element={
              <>
                <MainHead />
                <Menu />
                <Footer />
              </>
            }
          />
          <Route
            path="/basket"
            element={
              <>
                <OrderPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/burger/:id"
            element={
              <>
                <Burger />
                <SpecialOffer />
                <Footer />
              </>
            }
          />
          <Route
            path="/complete"
            element={
              <>
                <OrderComplete />
                <Footer />
              </>
            }
          />
          <Route
            path="/recipes-book"
            exact
            element={
              <>
                <MainHead />
                <MainContent />
                <SpecialOffer />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
