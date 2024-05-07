/** @format */

import React from "react";
import {
  FaRegThumbsDown,
  FaShoppingCart,
  FaUserMinus,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { CloseSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { users, login, logOut } = useUserContext();
  const name = users.name?.split(" ");
  const LogOutHandler = async () => {
    CloseSidebar();
    const response = await fetch("http://localhost:4000/api/v1/auth/logout", {
      method: "GET",
      withCredntials: true,
      credentials: "include",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      clearCart();
      logOut();
    }
  };
  return (
    <Wrapper className="cart-btn-wrapper">
      <div className="icon-container">
        <div className="icon-2">
          <Link to="/cart" className="cart-btn" onClick={CloseSidebar}>
            Cart
            <span className="cart-container">
              <FaShoppingCart></FaShoppingCart>
              <span className="cart-value">{total_items}</span>
            </span>
          </Link>
          {!login ? (
            <Link to="/login" className="cart-btn" onClick={CloseSidebar}>
              <p className="text-container">Đăng Nhập</p>
              <div className="addmargin">
                <FaUserPlus></FaUserPlus>
              </div>
            </Link>
          ) : (
            <>
              <div className="subnavbtn">
                <Link
                  to="/profile"
                  className="auth-btn-hover"
                  onClick={CloseSidebar}
                >
                  <p className="username">{name[0]} </p>
                  <img
                    className="userimg"
                    src={users.avatar}
                    alt="avatar"
                  ></img>
                </Link>
                <div className="subnavcontent">
                  <Link
                    to="/profile"
                    className="auth-btn"
                    onClick={CloseSidebar}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/profile"
                    className="auth-btn"
                    onClick={LogOutHandler}
                  >
                    Logout
                  </Link>
                  {users.role === "admin" ? (
                    <Link
                      to="/addproduct"
                      className="auth-btn"
                      onClick={CloseSidebar}
                    >
                      Thêm sản phẩm
                    </Link>
                  ) : null}
                </div>
              </div>
            </>
          )}
          {/* { 
      <Link to="/login" className="auth-btn">
        Login <FaUserPlus></FaUserPlus>
      </Link>
       <Link to="/login" className="auth-btn">
        Login <FaUserPlus></FaUserPlus>
      </Link>
     } */}
        </div>
        {login && (
          <Link
            type="button"
            className="cart-btn logout"
            onClick={LogOutHandler}
          >
            Logout <FaUserMinus></FaUserMinus>
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 300px;
  .subnavbtn {
    positon: relative;
    float: left;
    over-flow: hidden;
  }
  .icon-container {
    display: flex;
    flex-wrap: no wrap;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
  .icon-2 {
    display: flex;
    gap: 4rem;
  }
  .addmargin {
    padding-left: 8px;
    margin-top: 4px;
  }
  .cart-btn-wrapper {
    flex-direction: column;
  }
  .username {
    text-transform: uppercase;
    margin: 1rem 0;
    font-weight: bold;
    font-size: 1rem;
  }
  .subnavcontent {
    position: absolute;
    background-color: white;
    display: none;
    z-index: 1;
    margin-bottom: 1rem;
  }
  .userimg {
    display: block;
    height: 48px;
    width: 48px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px black solid;
  }
  .subnavbtn:hover {
    font-weight: 700;
  }
  .subnavcontent a {
    padding: 1rem;
  }
  .subnavcontent a:hover {
    colors: white;
    background-color: var(--clr-primary-5);
  }
  .subnavbtn:hover .subnavcontent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    flex-wrap: no wrap;
    align-items: center;
    justify-content: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .text-container {
    width: 100px;
    margin-bottom: 0;
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn-hover {
    display: flex;
    aligin-items: center;
    justify-content: center;
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    gap: 0.5rem;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .auth-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-color: transparent;
    font-size: 0.8rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
  }
  .logout {
    display: none;
  }
  @media screen and (max-width: 992px) {
    .subnavbtn:hover .subnavcontent {
      display: none;
    }
    .logout {
      display: block;
    }
  }
`;
export default CartButtons;
