/** @format */

import React, { useState } from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { Link, redirect } from "react-router-dom";
import { FcHighPriority } from "react-icons/fc";
import sucessicon from "../assets/success-svgrepo-com.svg";
import { AiFillCheckCircle } from "react-icons/ai";
import { useUserContext } from "../context/user_context";
import useLocalState from "../utils/LocalState";
export const VerifyEmail = () => {
  const data = useLoaderData();
  return (
    <Wrapper className="page-100">
      <div className="login-container">
        <div className="noficationSuccess">
          <img class="w-16 h-16 m-auto mb-8" src={sucessicon} alt=""></img>
          <h5 className=".">{data.msg}</h5>
        </div>
        <Link to="/login" className="btn">
          <td>Back to Login</td>
        </Link>
      </div>
    </Wrapper>
  );
};
export const Verifyloader = async ({ request }) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  const VerifyToken = url.searchParams.get("token");
  return fetch("http://localhost:4000/api/v1/auth/verifyemail", {
    method: "POST",
    withCredntials: true,
    credentials: "include",
    headers: {
      Accept: "application/form-data",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, VerifyToken }),
  });
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
