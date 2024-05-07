/** @format */

import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItemCheckOut from "./CartItemCheckOut";
import CartTotals2 from "./CartTotal2";

const CartContentCheckOut = () => {
  const { cart, clearCart } = useCartContext();
  console.log(cart);
  return (
    <Wrapper>
      {cart.map((item) => {
        return <CartItemCheckOut key={item.id} {...item}></CartItemCheckOut>;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .custom-total {
    justify-content: flex-start;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartContentCheckOut;
