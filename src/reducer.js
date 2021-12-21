export const intialState = {
  cart: [],
  user: null,
};


// sum price product checked
export const sumTotalPrice = (cart) => {
  return cart?.reduce((accumulator, currentValue) => currentValue.price + accumulator, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "Remove_ITEM":
      // give my index in on click in proudact
      const idx = state.cart.findIndex((cartItem) => cartItem.id === action.id);
      let newCart = [...state.cart];
      if (idx >= 0) {
        newCart.splice(idx, 1);
      }
      return {
        ...state,
        cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
