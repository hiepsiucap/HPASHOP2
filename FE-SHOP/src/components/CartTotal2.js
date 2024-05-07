/** @format */

import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals2 = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            tổng tiền: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Phí vận chuyển: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr></hr>
          <h4>
            thanh toán: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 0.75rem 1.5rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-start;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals2;
