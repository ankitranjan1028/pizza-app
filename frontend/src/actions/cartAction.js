export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  if (cartItem.quantity > 10) {
    alert("You can only add 10 pizzas");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

//     dispatch({type:"ADD_TO_CART", payload:cartItem});
//     const cartItems=getState().cartReducer.cartItems
//     //console.log(cartItems)
//     localStorage.setItem('cartItems',JSON.stringify(cartItems))
//     // localStorage.setItem(
//     //     "cartItems",
//     //     JSON.stringify(getState().cartReducer.cartItems)
//     // );
// };

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
