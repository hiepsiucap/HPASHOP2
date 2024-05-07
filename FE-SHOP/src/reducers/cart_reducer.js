/** @format */

import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  UPDATE_SHIPPING_FEE,
} from "../actions";
import CartItem from "../components/CartItem";

const cart_reducer = (state, action) => {
  if (action.type === UPDATE_SHIPPING_FEE) {
    return { ...state, shipping_fee: action.payload.value };
  }
  if (action.type === ADD_TO_CART) {
    console.log(action.payload);
    const { id, color, amount, product, height, weight, length, width } =
      action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((CartItem) => {
        if (CartItem.id === id + color) {
          let newAmount = CartItem.amount + amount;
          if (newAmount > CartItem.max) {
            newAmount = CartItem.max;
          }
          return { ...CartItem, amount: newAmount };
        } else {
          return { ...CartItem };
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        idproduct: id,
        name: product.name,
        color,
        height,
        weight,
        length,
        width,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const { id } = action.payload;
    const tempCart = state.cart.filter((item) => item.id !== id);
    return { ...state, cart: tempCart };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = value;
        if (value > item.max) newAmount = item.max;
        if (value < 1) newAmount = 1;
        return { ...item, amount: newAmount };
      } else {
        return item;
      }
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], shipping_fee: 0 };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += amount * price;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_items, total_amount };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
