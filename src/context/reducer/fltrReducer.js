const FltrReducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        allTShirts: [...action.payload],
        filterdTees: [...action.payload],
      };
    case "update_name_val":
      const { name, value } = action.payload; //dynamic key property
      return { ...state, filters: { ...state.filters, [name]: value } };

    case "set_Filters":
      let tempfltr = [...state.allTShirts];
      let { color, gender, type, price, search } = state.filters;

      if (color) {
        tempfltr = tempfltr.filter((elm) => elm.color.includes(color));
      }
      if (gender) {
        tempfltr = tempfltr.filter((elm) => elm.gender.includes(gender));
      }
      if (type) {
        tempfltr = tempfltr.filter((elm) => elm.type.includes(type));
      }
      if (search) {
        tempfltr = tempfltr.filter((elm) => {
          let multVals = elm.name + elm.type + elm.gender;
          return multVals.toLowerCase().includes(search);
        });
      }
      if (price) {
        tempfltr = tempfltr.filter((elm) => elm.price <= price);
      }
      return { ...state, filterdTees: tempfltr };

    case "hide_filters":
      return { ...state, isHide: action.payload };
    case "reset_filters":
      return {
        ...state,
        filters: {
          ...state.filters,
          color: "",
          gender: "",
          type: "",
          price: 500,
          minPrice: 0,
          maxPrice: 500,
          search: "",
        },
      };
    default:
      return state;
  }
};

export default FltrReducer;
