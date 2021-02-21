import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedBurger: {},
    basketContents: []
}
const store = createContext(initialState);
const { Provider } = store;

const AppState = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SETBURGER':
                return { ...state, selectedBurger: action.payload }
            case 'SETBASKET':
                return {
                    ...state,
                    basketContents: [...state.basketContents, action.payload]
                }
            case 'DELETEITEM':
                return { ...state, basketContents: action.payload }
            default:
                return state
        }
    }, initialState);

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

    return <Provider
        value={{
            state,
            setBurger,
            addToBasket,
            deleteFromBasket
        }}>
        {children} </Provider>;
};


export { store, AppState }