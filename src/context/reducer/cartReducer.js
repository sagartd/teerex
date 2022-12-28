const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_to_bag":
      let cartElm = action.payload;
      return {
        ...state,
        bag: [...state.bag, { ...cartElm, curQty: 1 }],
      };
    case "remove_from_bag":
      return {
        ...state,
        bag: state.bag.filter((elm) => elm.id !== action.payload.id),
      };

    case "decrise_quantity":
      let eleIndex = state.bag.findIndex((elm) => elm.id === action.payload.id);

      if (state.bag[eleIndex].curQty > 1) {
        state.bag[eleIndex].curQty -= 1;
      }
      let allCnt = state.bag.reduce((accum, curr) => accum + curr.curQty, 0);
      return { ...state, qty: allCnt };

    case "incrise_quantity":
      let elmtIndex = state.bag.findIndex(
        (elm) => elm.id === action.payload.id
      );
      if (state.bag[elmtIndex].curQty < state.bag[elmtIndex].quantity) {
        state.bag[elmtIndex].curQty += 1;
      }
      let allCount = state.bag.reduce((accum, curr) => accum + curr.curQty, 0);
      return { ...state, qty: allCount };

    case "total_bag_quantity": {
      let allCount = state.bag.reduce((accum, curr) => accum + curr.curQty, 0);
      return { ...state, totalQty: allCount };
    }
    case "total_bag_price":
      let allPrice = state.bag.reduce(
        (accum, curr) => accum + curr.curQty * curr.price,
        0
      );
      return { ...state, subtotal: allPrice };
    default:
      return state;
  }
};

export default cartReducer;
