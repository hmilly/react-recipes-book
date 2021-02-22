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
                        basketContents: [...state.basketContents, { burger: action.payload, quantity: 1 }]
                    }
                    case 'UPDATEBASKET':
                        return {
                            ...state,
                            basketContents: [...state.basketContents, { burger: action.payload, quantity : action.quantity + 1 }]
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
    const updateBasket = (burger, quantity) => {
        dispatch({
            type: "UPDATEBASKET",
            payload: burger,
            quantity: quantity
        })
    }
    const deleteFromBasket = (burger) => {
        dispatch({
            type: "DELETEITEM",
            payload: burger
        })
        console.log(burger)
    }

    const clicked = (e, burgerObj) => {
        e.preventDefault();
        const findBurgerobj = state.basketContents.find(b => b.burger.name === burgerObj.name)
        if (findBurgerobj) {
            updateBasket(findBurgerobj.burger, findBurgerobj.quantity)
        } else {
            addToBasket(burgerObj)
        }
        console.log(state.basketContents)
    }

    return <Provider
        value={{
            state,
            setBurger,
            addToBasket,
            deleteFromBasket,
            clicked
        }}>
        {children} </Provider>;
};


export { store, AppState }