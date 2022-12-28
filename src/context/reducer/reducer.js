const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "ready":
      return { ...state, tshirts: action.payload, isLoading: false };
    case "err":
      return { ...state, isErr: true, isLoading: false };
    // case "add_to_cart":
    //   return { ...state, cart: [...state.cart, { ...action.payload }] };
    // case "color_filter":
    //   return {
    //     ...state,
    //     tshirts: state.tshirts.filter((elm) => elm.color === action.payload),
    //   };
    default:
      return state;
  }
};

export default reducer;
