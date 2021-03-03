import React, { createContext, useEffect, useReducer, useState } from 'react';

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
        dispatch({
            type: typeCase,
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

    const clicked = (e, burgerObj, quantity) => {
        e.preventDefault();
        const findBurgerobj = state.basketContents.find(b => b.burger.name.includes(burgerObj.name))
        if (findBurgerobj) {
            const allObjects = state.basketContents
            const index = allObjects.indexOf(findBurgerobj)
            let edited = allObjects.splice(index, 1)
            edited = { burger: edited[0].burger, quantity: parseInt(quantity) }
            allObjects.splice(index, 0, edited)
            setItem("SETBASKET", [...allObjects])
        } else {
            setItem("SETBASKET", [...state.basketContents, { burger: burgerObj, quantity: 1 }])
        }
    }

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const total = state.basketContents.reduce((all, bVal) => (
            all + (parseFloat(bVal.burger.price) * parseInt(bVal.quantity))
        ), 0)
        setTotalPrice(total)
    }, [state.basketContents])


    

    return <Provider
        value={{
            state,
            setItem,
            deleteFromBasket,
            clicked,
            totalPrice
        }}>
        {children} </Provider>;
};

export { store, AppState }