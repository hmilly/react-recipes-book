import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/AppContext";

import "./styles/page/App.scss";
import "./styles/page/Basket.scss";
import "./styles/page/Burger.scss";
import "./styles/page/Menu.scss";
import "./styles/page/Order.scss";
import "./styles/page/Home.scss";

import "./styles/components/burgerCard.scss";
import "./styles/components/cartItem.scss";
import "./styles/components/footer.scss";
import "./styles/components/header.scss";
import "./styles/components/nav.scss";
import "./styles/components/specialOffer.scss";
import "./styles/components/userForm.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
