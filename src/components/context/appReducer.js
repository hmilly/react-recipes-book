
const appReducer = (state, action) => {
    switch (action.type) {
        case 'SETBURGER':
            return { ...state, selectedBurger: action.payload }
        case 'SETBASKET':
            return { ...state,
                basketContents: [...state.basketContents, action.payload] }
        case 'DELETEITEM':
            return { ...state, basketContents: action.payload }
        default:
            throw new Error();
    }
}


export default appReducer 