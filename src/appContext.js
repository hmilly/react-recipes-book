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
                return {
                    ...state,
                    basketContents: [...action.payload]
                }
            default:
                return state
        }
    }, initialState);

    const setBurger = (burgerObj) => {
        dispatch({
            type: "SETBURGER",
            payload: burgerObj
        })
    }
    const addToBasket = (burgerObj) => {
        dispatch({
            type: "SETBASKET",
            payload: burgerObj
        })
    }

    const deleteFromBasket = (e, burgerObj) => {
        e.preventDefault()
        const basket = state.basketContents.filter(b => b.burger.name !== burgerObj.name)
        console.log(basket)
        dispatch({
            type: "DELETEITEM",
            payload: basket
        })
    }



    const clicked = (e, burgerObj) => {
        e.preventDefault();
        const findBurgerobj = state.basketContents.find(b => b.burger.name.includes(burgerObj.name))
        if (findBurgerobj){
            deleteFromBasket(findBurgerobj)
        } else {
           addToBasket({burger: burgerObj, quantity: 1}) 
        }
        
        console.log(state.basketContents)
        console.log(findBurgerobj)
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