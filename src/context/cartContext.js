import React, { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import cartReducer from "./reducer/cartReducer";

const Cart = createContext();
// const localBag = () => {
//   let localBagData = localStorage.getItem("myCart");

//   if (localBagData === []) {
//     return [];
//   } else {
//     return JSON.parse(localBagData);
//   }
// };
const init = {
  // bag: localBag(),
  bag: [],
  qty: 1,
  totalQty: 0,
  subtotal: 0,
  shipping: 50,
};
const CartContext = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, init);

  const removeItemBag = (val) => {
    cartDispatch({ type: "remove_from_bag", payload: val });
  };

  const hndlQtyIncri = (element) => {
    cartDispatch({ type: "incrise_quantity", payload: element });
  };
  const hndlQtyDecri = (element) => {
    cartDispatch({ type: "decrise_quantity", payload: element });
  };

  useEffect(() => {
    cartDispatch({ type: "total_bag_quantity" });
    cartDispatch({ type: "total_bag_price" });
    //localStorage.setItem("myCart", JSON.stringify(cartState.bag));
  }, [cartState.bag, cartState.totalQty, cartState.qty]);

  return (
    <Cart.Provider
      value={{
        ...cartState,
        cartDispatch,
        removeItemBag,
        hndlQtyIncri,
        hndlQtyDecri,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartContext;

export const ConsumeCartContext = () => {
  return useContext(Cart);
};
