/** @format */

import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link, redirect } from "react-router-dom";
import { FcHighPriority } from "react-icons/fc";
import { BsCloudHaze2 } from "react-icons/bs";
import sucessicon from "../assets/success-svgrepo-com.svg";
import { AiFillCheckCircle } from "react-icons/ai";
import { useUserContext } from "../context/user_context";
import useLocalState from "../utils/LocalState";
const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [wrongalert, wrongalertHandler] = useState(null);
  const { showAlert, alert, loading, setLoading, hideAlert } = useLocalState();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    const { email, password, name } = values;
    const loginUser = { email, password, name };
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/register",
        {
          method: "POST",
          withCredntials: true,
          credentials: "include",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginUser),
        }
      );
      const data = await response.json();
      if (data) {
        if (!response.ok) {
          wrongalertHandler(data.msg);
          setLoading(false);
          return;
        }
        setValues({ name: "", email: "", password: "" });
        showAlert({
          text: `Welcome, ${data.msg}`,
          type: "success",
        });
        setLoading(false);
      }
    } catch {
      wrongalertHandler("The Internet Is Not Stable Let's Try");
      setLoading(false);
    }
  };
  return (
    <Wrapper className="page-100">
      <div className="login-container">
        <h2>Đăng ký</h2>
        {alert.show ? (
          <div className="noficationSuccess">
            <img
              className="w-16 h-16 m-auto mb-8"
              src={sucessicon}
              alt=""
            ></img>
            <h5 className=".">{alert.text}</h5>
          </div>
        ) : (
          <Form
            onSubmit={onSubmit}
            action="/login"
            method="post"
            class="login-form"
          >
            {wrongalert ? (
              <div className="noficationNotOk">
                <div>
                  <FcHighPriority></FcHighPriority>
                </div>
                <p>{wrongalert}</p>
              </div>
            ) : null}
            <div class="form-group">
              <label for="username">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <Link to="/login" className="register">
              Đã có tài khoản ?
            </Link>
            <div class="form-group">
              <button type="submit">
                {" "}
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
          </Form>
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

  .form-group button {
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
`;
export default Register;
