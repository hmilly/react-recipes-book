import React, { createContext, useEffect, useReducer, useState } from "react";
import appReducer from "./AppReducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    users: [],
    allBurgers: [],
    basket: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = state.basket.reduce(
      (all, bVal) =>
        all + parseFloat(bVal.burger.price) * parseInt(bVal.quantity),
      0
    );
    setTotalPrice(total);
  }, [state.basket]);


  const checkQuantity = (e, q, q2) => {
    let total = e.target.name === "quantity" ? q : q + parseInt(q2);
    return total < 10 ? total : (total = 9);
  };

  const addToBasket = (e, burgerObj, quantity) => {
    e.preventDefault();

    const bInBasket = state.basket.find((b) =>
      b.burger.name.match(burgerObj.name)
    );

    if (!bInBasket) {
      dispatch({
        type: "SET_BASKET",
        payload: [...state.basket, { burger: burgerObj, quantity: 1 }],
      });
    } else {
      const allObjects = state.basket;
      const i = allObjects.indexOf(bInBasket);
      let edited = allObjects.splice(i, 1);
      quantity = checkQuantity(e, quantity, edited[0].quantity);

      edited = { burger: edited[0].burger, quantity: quantity };
      allObjects.splice(i, 0, edited);

      dispatch({ type: "SET_BASKET", payload: [...allObjects] });
    }
  };

  const deleteFromBasket = (e, burgerObj) => {
    e.preventDefault();
    const basket = state.basket.filter((b) => b.burger.name !== burgerObj.name);

    dispatch({
      type: "DELETEITEM",
      payload: [...basket],
    });
  };

  const inBasket = (name) => {
    const bInBasket = state.basket.find((b) => b.burger.name.match(name));
    return state.basket.find((b) => b.burger.name.match(name))
      ? bInBasket.quantity
      : 0;
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        addToBasket,
        inBasket,
        deleteFromBasket,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
