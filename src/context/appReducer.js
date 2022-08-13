const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_BURGERS":
      return {
        ...state,
        allBurgers: action.payload,
      };
    case "SET_BURGER":
      return {
        ...state,
        burger: action.payload,
        loading: false,
      };
    case "SET_BASKET":
      return {
        ...state,
        basket: action.payload,
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "DELETEITEM":
      return {
        ...state,
        basket: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
