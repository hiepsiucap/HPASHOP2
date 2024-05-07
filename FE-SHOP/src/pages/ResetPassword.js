/** @format */

import React, { useState } from "react";
import { Form, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import sucessicon from "../assets/success-svgrepo-com.svg";
import { Link, redirect } from "react-router-dom";
import { BsCloudHaze2 } from "react-icons/bs";
import { useUserContext } from "../context/user_context";
import useLocalState from "../utils/LocalState";
const ResetPassWord = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { saveUser } = useUserContext();
  const [values, setValues] = useState({
    email: "",
  });
  const [successmesseage, successmesseageHandler] = useState(null);
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    const { email } = values;
    const ResetUser = { email };
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/reset-password",
        {
          method: "POST",
          withCredntials: true,
          credentials: "include",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ResetUser),
        }
      );
      if (!response.ok) {
        const msg = await response.json();
        showAlert({ text: msg?.msg });
        setLoading(false);
        return;
      }
      const data = await response.json();
      if (!data) throw new Error();
      if (data) {
        successmesseageHandler(data.msg);
        setLoading(false);
      }
    } catch {
      showAlert({ text: "Failed to connect to the server Lets try again" });
    }
  };
  return (
    <Wrapper className="page-100">
      <div class="login-container">
        {successmesseage ? (
          <div className="mt-24 flex flex-col items-center space-y-6">
            <h3 className="ml-3">thành công!</h3>
            <img className="w-16 h-16" src={sucessicon} alt=""></img>
            <h5 className="">{successmesseage}</h5>
          </div>
        ) : (
          <>
            <h2>Quên Mật Khẩu</h2>
            {alert.show && alert.type === "danger" && (
              <p className="danger">{alert.text}</p>
            )}
            {alert.show && alert.type === "success" && (
              <p className="success">{alert.text} !!!!!!!!</p>
            )}
            <Form
              onSubmit={onSubmit}
              action="/login"
              method="post"
              class="login-form"
            >
              <div class="form-group">
                <label for="username">Email:</label>
                <input
                  placeholder="Nhập email"
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="form-group">
                <button type="submit">
                  {" "}
                  {loading ? "Loading..." : "Gửi Email"}
                </button>
              </div>
            </Form>
            {alert.show ? <p className="alert">{alert.text}</p> : null}
          </>
        )}
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
  .danger{
    color:red;
  }
  .alert{
    color:red;
  }
  .forgot-password{
 font-style: italic;
    font-size: 0.8rem;
    color: var(--clr-grey-1);
  }
  .success{
    color:green;
  }
  .login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .regisandforgot{
     display: flex;
    flex-direction:row;
    gap: 3rem;

  }
  .login-container h2 {
  }
  .register {
    align-self: flex-start;
    font-style: italic;
    font-size: 0.8rem;
    color: var(--clr-grey-1);
    display:block;
  }
  }
  .login-form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }

  .form-group {
    margin-bottom: 15px;
  }
  .successicon{
    height:50px;
    weight:50px;
    margin-bottom: 2rem;
  }
  .form-group label {
    display: block;
    font-weight: bold;
  }
 .noficationSuccess
  {
    margin-top: 6rem;
  }
  .noficationSuccess h3
  {
    margin-bottom: 2rem;
    color: green;
  }
  .form-group input {
    width: 16rem;
    margin-top:0.5rem;
    height: 2rem;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .form-group button {
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    background: var(--clr-primary-10);
    display: flex;
    font-weight: bold;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
    align-items: center;
    margin-top: 2.5rem;
  }
`;
export default ResetPassWord;
