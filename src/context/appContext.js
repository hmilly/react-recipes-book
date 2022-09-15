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

  // get total price of basket items
  useEffect(() => {
    const total = state.basket.reduce(
      (all, bVal) =>
        all + parseFloat(bVal.burger.price) * parseInt(bVal.quantity),
      0
    );
    setTotalPrice(total);
  }, [state.basket]);

  // find if the matching burger is currently in the basket
  const findInBasket = (name) =>
    state.basket.find((b) => b.burger.name.match(name));

  // check quantity in basket
  // max items per burger is 9
  const checkQuantity = (e, q, q2) => {
    let total = e.target.name === "quantity" ? q : q + parseInt(q2);
    return total < 10 ? total : (total = 9);
  };

  const addToBasket = (e, burgerObj, quantity) => {
    e.preventDefault();
    // see if burger is all ready in the basket
    const bInBasket = findInBasket(burgerObj.name);
    // if not in basket, add to basket with quantity of 1
    if (!bInBasket) {
      dispatch({
        type: "SET_BASKET",
        payload: [...state.basket, { burger: burgerObj, quantity: 1 }],
      });
      // otherwise find object, remove, update and add back at the correct place.
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

  // delete from basket using filter
  const deleteFromBasket = (e, burgerObj) => {
    e.preventDefault();
    const basket = state.basket.filter((b) => b.burger.name !== burgerObj.name);

    dispatch({
      type: "DELETEITEM",
      payload: [...basket],
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        addToBasket,
        findInBasket,
        deleteFromBasket,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
