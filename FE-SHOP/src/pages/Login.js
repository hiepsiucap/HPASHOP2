/** @format */

import React, { useState } from "react";
import { Form, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import { BsCloudHaze2 } from "react-icons/bs";
import { useUserContext } from "../context/user_context";
import useLocalState from "../utils/LocalState";
export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { saveUser } = useUserContext();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    const { email, password } = values;
    const loginUser = { email, password };
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        withCredntials: true,
        credentials: "include",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      });
      if (!response.ok) {
        const msg = await response.json();
        showAlert({ text: msg?.msg });
        setLoading(false);
        return;
      }
      const data = await response.json();
      if (data) {
        setValues({ name: "", email: "", password: "" });
        showAlert({
          text: `Welcome, ${data.user.name}. Redirecting to Home...`,
          type: "success",
        });
        setLoading(false);
        navigate("/");
        saveUser(data.user);
        return;
      }
    } catch {
      showAlert({ text: "The server is not working lets try again" });
      setLoading(false);
      return;
    }
  };
  return (
    <Wrapper className="page-100">
      <div class="login-container">
        <h2>Đăng Nhập</h2>
        {alert.show && alert.type === "danger" && (
          <div className="alert">
            <div className="alert-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="alert-svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p className="danger">{alert.text}</p>
          </div>
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
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="regisandforgot">
            <Link to="/register" className="register">
              Đăng kí tài khoản ?
            </Link>
            <Link to="/reset-password" className="register">
              Quên mật khẩu ?
            </Link>
          </div>
          <div class="form-group">
            <button type="submit"> {loading ? "Loading..." : "Login"}</button>
          </div>
        </Form>
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
    text-transform: uppercase;
    font-weight:bold;
  }
  .alert{
    display:flex;
    gap:0.5rem;
    justify-content:center;
    aligns-item:center;
  }
  .alert-svg{
    width:24px;
    height:24px;
    fill:red;
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
    margin-bottom: 2rem;
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

  .form-group label {
    display: block;
    font-weight: bold;
  }

  .form-group input {
    width: 16rem;
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
