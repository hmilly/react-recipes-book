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
            case 'DELETEITEM':
                return {
                    ...state,
                    basketContents: action.payload
                }
            default:
                return state
        }
    }, initialState);

    const setItem = (typeCase, burgerObj) => {
        console.log("set", burgerObj)
        dispatch({
            type: typeCase,
            payload: burgerObj
        })
    }
    // const addToBasket = (burgerObj) => {
    //     dispatch({
    //         type: "SETBASKET",
    //         payload: burgerObj
    //     })
    // }

    const deleteFromBasket = (e, burgerObj) => {
        e.preventDefault()
        const basket = state.basketContents.filter(b => b.burger.name !== burgerObj.name)
        dispatch({
            type: "DELETEITEM",
            payload: [...basket]
        })
    }

    const clicked = (e, burgerObj) => {
        console.log("click", burgerObj)
        e.preventDefault();
        const findBurgerobj = state.basketContents.find(b => b.burger.name.includes(burgerObj.name))
        if (findBurgerobj) {
            const allObjects = state.basketContents
            let edited = allObjects.splice(allObjects.indexOf(findBurgerobj), 1)
            edited = { burger: edited[0].burger, quantity: edited[0].quantity + 1 }
            setItem("SETBASKET", [...allObjects, edited])
        } else {
            setItem("SETBASKET", [...state.basketContents, { burger: burgerObj, quantity: 1 }])
        }
    }

    return <Provider
        value={{
            state,
            setItem,
            deleteFromBasket,
            clicked
        }}>
        {children} </Provider>;
};


export { store, AppState }