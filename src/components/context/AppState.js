import React, { useReducer } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer"

const AppState = (props) => {
    const initialState = {
        selectedBurger: [],
        basketContents: []
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

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

        <AppContext.Provider value={{
            selectedBurger: state.selectedBurger,
            setBurger,
            addToBasket,
            deleteFromBasket,
            initialState
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState 