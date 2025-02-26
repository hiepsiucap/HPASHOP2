/** @format */

import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  UPDATE_SHIPPING_FEE,
} from "../actions";
const getLocalStorge = () => {
  let cart = localStorage.getItem("cart");
  console.log(cart);
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};
const initialState = {
  cart: getLocalStorge(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 0,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (
    id,
    color,
    amount,
    product,
    height,
    weight,
    length,
    width
  ) => {
    console.log(id, color, amount, product);
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color, amount, product, height, weight, length, width },
    });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
  };
  const toggleAmount = (id, value) => {
    console.log(value);
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  const updateshippingfee = (value) => {
    console.log(value);
    dispatch({ type: UPDATE_SHIPPING_FEE, payload: { value } });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    if (state.cart) localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart,
        updateshippingfee,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
