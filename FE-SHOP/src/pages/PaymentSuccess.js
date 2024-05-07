/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Link, redirect } from "react-router-dom";
import sucessicon from "../assets/success-svgrepo-com.svg";
export const PaymentSuccess = () => {
  return (
    <Wrapper className="page-100">
      <div className="login-container">
        <div className="noficationSuccess">
          <img class="w-16 h-16 mx-auto my-5" src={sucessicon} alt=""></img>
          <h5 className=".">
            Đơn hàng của bạn đang được xử lý, Chúng tôi sẽ giao đến cho bạn sớm
            nhất
          </h5>
        </div>
        <Link to="/" className="btn">
          <td>Trở về trang chủ</td>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--clr-primary-2);
  .login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-container h2 {
  }
  .noficationNotOk{
    display:flex;
    flex-direction:row;
    gap: 0.5rem;
  }
  .noficationNotOk p{
    color: red;
  }
   .noficationNotOk div{
   margin-top: 3px
  }
  .successicon{
    height:50px;
    weight:50px;
    margin-bottom: 2rem;
  }
  .register {
    align-self: flex-start;
    margin-left: 3.8rem;
    font-style: italic;
    font-size: 0.8rem;
     color: var(--clr-primary-2);
  }
  }
  .noficationSuccess
  {
    margin-top: 6rem;
  }
  .login-form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    font-weight: bold;
  }

  .form-group input {
    width: 15rem;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
    .btn {
    color: var(--clr-grey-1);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-10);
    display: flex;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 2px;
    align-items: center;
    margin-top: 2.5rem;
  }
  .btn td {
  text-align: center;
    vertical-align: middle;
  }
`;
