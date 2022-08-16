import { data } from "autoprefixer";
import React, { createContext, useEffect, useReducer, useState } from "react";
import appReducer from "./appReducer";

const store = createContext();

export const AppState = ({ children }) => {
  const initialState = {
    users: [],
    allBurgers: [],
    burger: {},
    basket: [],
    loading: false,
  };

  // *****  fetch fns  **** //
  const fetchHeader = {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json;odata.metadata=full",
    "Content-Type": "application/json",
  };

  const getUsers = async () => {
    setLoading();
    await fetch("https://my-json-server.typicode.com/hmilly/db/users", {
      method: "GET",
      headers: fetchHeader,
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: "SET_USERS",
          payload: res,
        })
      )
      .catch((error) => console.log(error));
  };

  // const getAllBurgers = async () => {
  //     await fetch('https://my-json-server.typicode.com/hmilly/db')
  //         .then(res => res.json())
  //         .then(res => setAllBurgers(res.burgers))
  //         .catch((error) => console.log(error));
  // }

  //above fetch is from internal db on 2nd server.
  //below is fetching from online fake db to use with github pages

  const getAllBurgers = async () => {
    setLoading();
    await fetch("https://my-json-server.typicode.com/hmilly/db/burgers", {
      method: "GET",
      headers: fetchHeader,
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: "SET_BURGERS",
          payload: res,
        })
      )
      .catch((error) => console.log(error));
  };

  const getBurger = async (id) => {
    setLoading();
    await fetch(`https://my-json-server.typicode.com/hmilly/db/burgers/${id}`, {
      method: "GET",
      headers: fetchHeader,
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: "SET_BURGER",
          payload: res,
        })
      )
      .catch((error) => console.log(error));
  };

  /// post request
  const addNewUser = async (userDetails) => {
    setLoading();
    const userOrder = state.basket.map(
      (b) => `${b.burger.name} x ${b.quantity}`
    );
    await fetch(`https://my-json-server.typicode.com/hmilly/db/users`, {
      method: "POST",
      headers: fetchHeader,
      body: JSON.stringify({
        ...userDetails,
        order: userOrder,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
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

  const setLoading = () => dispatch({ type: "SET_LOADING", payload: data });

  const getQuantity = (e, q, q2) =>
    e.target.name === "quantity" ? q : q + parseInt(q2);

  const deleteFromBasket = (e, burgerObj) => {
    e.preventDefault();
    const basket = state.basket.filter((b) => b.burger.name !== burgerObj.name);
    dispatch({
      type: "DELETEITEM",
      payload: [...basket],
    });
  };

  // fns below need re-writing //
  const addToBasket = () => {};

  const clicked = (e, burgerObj, quantity) => {
    e.preventDefault();
    quantity = parseInt(quantity);
    const findBurgerobj = state.basket.find((b) =>
      b.burger.name.match(burgerObj.name)
    );

    if (!findBurgerobj) {
      dispatch({
        type: "SET_BASKET",
        payload: [...state.basket, { burger: burgerObj, quantity: 1 }],
      });
    } else {
      const allObjects = state.basket;
      const index = allObjects.indexOf(findBurgerobj);
      let edited = allObjects.splice(index, 1);
      let newQ = getQuantity(e, quantity, edited[0].quantity);
      if (newQ === 10) {
        newQ = 9;
        window.alert(`Max number of ${burgerObj.name} added to basket`);
      }
      edited = { burger: edited[0].burger, quantity: newQ };
      allObjects.splice(index, 0, edited);
      dispatch({ type: "SET_BASKET", payload: [...allObjects] });
    }
  };

  const inBasket = (name) => {
    const findBurgerobj = state.basket.find((b) => b.burger.name.match(name));
    return state.basket.find((b) => b.burger.name.match(name))
      ? findBurgerobj.quantity
      : 0;
  };

  return (
    <store.Provider
      value={{
        allBurgers: state.allBurgers,
        burger: state.burger,
        basket: state.basket,
        users: state.users,
        loading: state.loading,
        totalPrice,
        deleteFromBasket,
        clicked,
        getAllBurgers,
        getBurger,
        inBasket,
        getUsers,
        addNewUser,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default store;
