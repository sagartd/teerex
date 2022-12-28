import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer/reducer";
import axios from "axios";

const Tdata = createContext();

const init = {
  isErr: false,
  isLoading: false,
  tshirts: [],
};

const ContextStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);

  const url =
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

  const getData = async (lnk) => {
    dispatch({ type: "loading" });
    try {
      const respo = await axios.get(lnk);
      dispatch({ type: "ready", payload: respo.data });
    } catch (err) {
      dispatch({ type: "Err" });
    }
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <Tdata.Provider value={{ ...state, dispatch }}>{children}</Tdata.Provider>
  );
};

export default ContextStore;

export const ConsumeContext = () => {
  return useContext(Tdata);
};

// import React, { useContext } from "react";
// import { useEffect } from "react";
// import { createContext } from "react";
// import axios from "axios";
// import { useReducer } from "react";
// import Ereducer from "./reducer/reducer";

// const Econtext = createContext();

// const init = {
//   isErro: false,
//   isLoaded: false,
//   allItems: [],
//   featureItem: [],
//   isSinglErro: false,
//   isSinglLoaded: false,
//   singleItem: {}
// };

// const ContextStore = ({ children }) => {
//   const [apiState, dispatch] = useReducer(Ereducer, init);

//   const url = `https://api.pujakaitem.com/api/products`;

//   const apiGet = async (lnk) => {
//     dispatch({ type: "API_Load" });
//     try {
//       const respon = await axios.get(lnk);
//       const respoApi = await respon.data
//       dispatch({ type: "API_Ready", payload: respoApi });
//     } catch (err) {
//       dispatch({ type: "API_Err" });
//     }
//   };

//   const singleProd = async (nlnk) => {
//     dispatch({ type: "SngleItem_Load" });
//     try {
//       const respo = await axios.get(nlnk);
//       const resp = await respo.data
//       dispatch({ type: "SngleItem_Ready", payload: resp });
//     } catch (err) {
//       dispatch({ type: "SngleItem_Err" });
//     }
//   };

//   useEffect(() => {
//     apiGet(url);
//   }, []);

//   return (
//     <Econtext.Provider value={{ ...apiState, singleProd }}>
//       {children}
//     </Econtext.Provider>
//   );
// };

// export default ContextStore;

// const ContextConsume = () => {
//   return useContext(Econtext);
// };

// export { ContextConsume };
