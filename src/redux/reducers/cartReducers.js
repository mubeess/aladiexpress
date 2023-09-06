import { CARTS } from "../constants";

const cartReducers = (cart = [], action) => {
  switch (action.type) {
    case CARTS.ADD_TO_CART:
      let tempcart = cart.filter((item) => item.id === action.payload.id);
      if (tempcart.length < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }

    default:
      return cart;
  }
};

export default cartReducers;
