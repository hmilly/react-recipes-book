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
                return {
                    ...state,
                    selectedBurger: action.payload
                }
            case 'SETBASKET':
                return {
                    ...state,
                    basketContents: action.payload
                }
            case 'UPDATEBASKET':
                return {
                    ...state,
                    basketContents: action.payload
                }
            case 'DELETEITEM':
                return {
                    ...state,
                    basketContents: action.payload
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
    const updateBasket = (burgerObj) => {
        dispatch({
            type: "UPDATEBASKET",
            payload: burgerObj
        })
    }

    const deleteFromBasket = (e, burgerObj) => {
        e.preventDefault()
        const basket = state.basketContents.filter(b => b.burger.name !== burgerObj.name)
        dispatch({
            type: "DELETEITEM",
            payload: [...basket]
        })
    }

    const clicked = (e, burgerObj) => {
        e.preventDefault();
        const findBurgerobj = state.basketContents.find(b => b.burger.name.includes(burgerObj.name))
        if (findBurgerobj) {
            const allObjects = state.basketContents
            let edited = allObjects.splice(allObjects.indexOf(findBurgerobj), 1)
            edited = { burger: edited[0].burger, quantity: edited[0].quantity + 1 }
            updateBasket([...allObjects, edited])
        } else {
            addToBasket([...state.basketContents, { burger: burgerObj, quantity: 1 }])
        }
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