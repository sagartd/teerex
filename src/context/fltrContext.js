import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ConsumeContext } from "./context";
import FltrReducer from "./reducer/fltrReducer";

const Filtered = createContext();

const init = {
  allTShirts: [],
  filterdTees: [],
  isHide: "hidden",
  filters: {
    color: "",
    gender: "",
    type: "",
    price: 500,
    minPrice: 0,
    maxPrice: 500,
    search: "",
  },
};

const FltrContext = ({ children }) => {
  const { tshirts } = ConsumeContext();

  const [fltrState, fltrDispatch] = useReducer(FltrReducer, init);

  //Dispatch name and value, we get from onChange.
  const hndlUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    fltrDispatch({ type: "update_name_val", payload: { name, value } });
  };

  // const hndlColorCheck = (e) => {
  //   let check = e.target.checked;
  //   let valu = e.target.value;
  //   fltrDispatch({ type: "color_Filters", payload: { valu, check } });
  // };

  useEffect(() => {
    fltrDispatch({ type: "success", payload: tshirts });
  }, [tshirts]);

  useEffect(() => {
    fltrDispatch({ type: "set_Filters" });
  }, [fltrState.filters, fltrState.filters.color]);

  return (
    <Filtered.Provider
      value={{ ...fltrState, fltrDispatch, hndlUpdate }}
    >
      {children}
    </Filtered.Provider>
  );
};

export default FltrContext;

export const ConsumeFltrContext = () => {
  return useContext(Filtered);
};
