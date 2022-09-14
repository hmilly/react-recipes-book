const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_APP_DATA":
    return {
      ...state,
      allBurgers: action.payload.allBurgers,
      users: action.payload.users,
    }
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
