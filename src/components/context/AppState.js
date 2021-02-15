import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer"

const AppState = ({ children }) => {
    const initialState = {
        selectedBurger: [],
        basketContents: []
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setBurger = (burger) => {
        dispatch({
            type: "SETBURGER",
            payload: burger
        })
    }

    const addToBasket = (burger) => {
        dispatch({
            type: "SETBASKET",
            payload: burger
        })
    }

    const deleteFromBasket = (burger) => {
        dispatch({
            type: "DELETEITEM",
            payload: burger
        })
        console.log(burger)
    }

    return (
        <AppContext.Provider
            value={{
                state,
                setBurger,
                addToBasket,
                deleteFromBasket
            }}> {children}
        </AppContext.Provider>
    )
}

export default AppState 