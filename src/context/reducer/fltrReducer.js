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

    case "color_Filters":
      let shirts = [...state.allTShirts];
      let arr = [...action.payload];

      const logi = shirts.filter((elm) =>
        arr.some((item) => item.isChecked && elm.color === item.color)
      );
      if (logi.length === 0) {
        return {
          ...state,
          filterdTees: [...shirts],
        };
      } else {
        return {
          ...state,
          filterdTees: [...logi],
        };
      }

    case "set_Filters":
      let tempfltr = [...state.allTShirts];
      let { gender, type, price, search } = state.filters;
      //console.log(color);
      // if (color) {
      //   tempfltr = tempfltr.filter((elm) => color.includes(elm.color));
      // }
      if (gender) {
        tempfltr = tempfltr.filter((elm) => elm.gender.includes(gender));
      }
      if (type) {
        tempfltr = tempfltr.filter((elm) => elm.type.includes(type));
      }
      if (search) {
        tempfltr = tempfltr.filter((elm) => {
          let multVals = elm.name;
          console.log(multVals);
          return multVals.toLowerCase().includes(search.toLowerCase());
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
