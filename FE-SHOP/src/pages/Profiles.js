/** @format */

import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link, redirect } from "react-router-dom";
import { BsCloudHaze2 } from "react-icons/bs";
import { useUserContext } from "../context/user_context";
import useLocalState from "../utils/LocalState";
import { toast } from "react-toastify";
const Profile = () => {
  const navigate = useNavigate();
  const { saveUser, users } = useUserContext();
  const [values, setValues] = useState({
    email: users.email,
    name: users.name,
    company: users?.company || "",
  });
  console.log(values);
  const { showAlert, loading, setLoading, hideAlert } = useLocalState();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleChangeFile = (e) => {
    console.log(e.target.files);
    setValues({ ...values, [e.target.name]: e.target.files });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    const { email, name, company, avatarfile } = values;
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("name", name);
    if (avatarfile)
      for (const file of avatarfile) {
        formdata.append("avatar", file);
        console.log(avatarfile);
      }
    formdata.append("company", company);
    const response = await fetch(
      "http://localhost:4000/api/v1/users/updateUser",
      {
        method: "PATCH",
        withCredntials: true,
        credentials: "include",
        body: formdata,
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
      toast.success("Thay đổi thông tin thành công", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
      saveUser(data.user);
    }
  };
  return (
    <Wrapper className="page-100">
      <div class="login-container">
        <h2>Thông tin người dùng </h2>
        <img src={users.avatar} alt="avatar"></img>
        <Form
          onSubmit={onSubmit}
          action="/login"
          method="post"
          class="login-form"
        >
          <div class="form-group">
            <label for="username">Họ và tên :</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={values.name}
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label for="company">Công ty : </label>
            <input
              type="text"
              id="company"
              name="company"
              value={values.company}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label for="avatarfile">Ảnh đại diện:</label>
            <input
              type="file"
              id="avatarfile"
              name="avatarfile"
              onChange={handleChangeFile}
            />
          </div>
          <div class="form-group">
            <button type="submit">
              {" "}
              {loading ? "Loading..." : "Thay đổi"}
            </button>
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
  .login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 800px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    font-size:1.2rem;
  }
  img{
    margin-top:48px;
    width:256px;
    height:256px;
    display:block;
    object-fit:cover;
    border-radius:50%;
    border: 6px var(--clr-grey-1) solid;
  }
  .login-container h2 {
  }
  .register {
    align-self: flex-start;
    margin-left: 3.8rem;
    font-style: italic;
    color: var(--clr-grey-1);
  }
  }
  .login-form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }

  .form-group {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
     align-items: center;
  }

  .form-group label {
    display: block;
    font-weight: bold;
    width: 150px;
    text-align:left;
  }

  .form-group input {
    width: 20rem;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 1rem;
    font-size:1.2rem;
  }

  .form-group button {
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    font-size:1.2rem;
    background: var(--clr-primary-10);
    display: flex;
    padding: 0.75rem 0.75rem;
    border-radius: 4px;
    align-items: center;
    margin-top: 2.5rem;
  }
`;
export default Profile;
