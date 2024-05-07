/** @format */

import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { toast } from "react-toastify";
import useLocalState from "../utils/LocalState";
const AddProduct = () => {
  const { cart } = useCartContext();
  const [values, setValues] = useState({
    name: "",
    price: 0,
    description: "",
    stock: "",
    height: 1,
    length: 1,
    weight: 1,
    width: 1,
    colors: "",
    company: "",
    files: "",
    category: "",
  });
  console.log(values.category);
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleChangeFile = (e) => {
    console.log(e.target.files);
    setValues({ ...values, [e.target.name]: e.target.files });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(values);
    const {
      name,
      price,
      description,
      stock,
      colors,
      company,
      files,
      category,
      height,
      length,
      weight,
      width,
    } = values;
    console.log(files);
    const formdata = new FormData();
    formdata.append("category", category);
    formdata.append("height", height);
    formdata.append("length", length);
    formdata.append("weight", weight);
    formdata.append("width", width);
    formdata.append("description", description);
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("stock", stock);
    formdata.append("colors", colors);
    formdata.append("company", company);
    for (const file of files) {
      console.log(file);
      formdata.append("files", file);
    }
    console.log(formdata);
    try {
      const response = await fetch("http://localhost:4000/api/v1/products", {
        method: "POST",
        withCredntials: true,
        credentials: "include",
        body: formdata,
      });
      if (!response.ok) {
        const msg = await response.json();
        toast.error(`Thay đổi thông tin thất bại:${msg?.msg}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        return;
      }
      const data = await response.json();
      if (data) {
        setValues({
          name: "",
          price: 0,
          description: "",
          stock: "",
          colors: "",
          company: "",
          files: "",
          height: 1,
          length: 1,
          weight: 1,
          width: 1,
          category: "",
        });
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
      }
    } catch {
      setLoading(false);
    }
  };
  return (
    <main>
      <Wrapper className="page">
        <div className="container">
          <h2>THÊM SẢN PHẨM</h2>
          <form className="addfrom" onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label for="name">Tên Sản Phẩm:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="price">Giá:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={values.price}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="category">Loại:</label>
              <select
                id="category"
                name="category"
                value={values.category}
                onChange={handleChange}
                required
              >
                <option>Chọn loại phòng</option>
                <option value="kitchen">kitchen </option>
                <option value="bedroom">bedroom</option>
                <option value="office">office</option>
              </select>
            </div>

            <div class="form-group">
              <label for="description" className="description">
                Mô tả:
              </label>
              <textarea
                id="description"
                name="description"
                className="p-1"
                value={values.description}
                onChange={handleChange}
                rows="4"
                cols="48"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="stock">Tồn kho:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={values.stock}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="stock">Chiều cao (cm):</label>
              <input
                type="number"
                id="height"
                name="height"
                value={values.height}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="stock">Chiều rộng (cm):</label>
              <input
                type="number"
                id="width"
                name="width"
                value={values.width}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="stock">Cân nặng (gram):</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={values.weight}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="stock">Chiều dài (cm):</label>
              <input
                type="number"
                id="length"
                name="length"
                value={values.length}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="colors">Màu Sắc:</label>
              <input
                type="text"
                id="colors"
                name="colors"
                value={values.colors}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="company">Công ty:</label>
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
              <label for="price">Hình ảnh</label>
              <input
                type="file"
                id="files"
                name="files"
                onChange={handleChangeFile}
                multiple
              />
            </div>
            <div className="group-btn">
              <div class="form-group">
                <button type="submit">
                  {" "}
                  {loading ? "Loading..." : "Tạo sản phẩm"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--clr-primary-2);
  .success {
    color: green;
  }
  .danger {
    color: red;
  }

  select {
    width: 10rem;
    border: 1px black solid;
  }
  .container {
    margin-top: 50px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 800px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 4rem;
  }
  .container h2 {
    margin-left: 5rem;
  }
  .addfrom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5rem;
  }
  .form-group {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
  }
  .form-group label {
    font-size: 1rem;
    font-weight: bold;
    width: 200px;
    text-align: left;
  }
  .form-group input {
    font-size: 1rem;
    width: 400px;
  }
  .description {
    height: 100px;
  }
  input {
    border: 1px black solid;
  }
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  textarea {
    border: 1px black solid;
  }
  .form-group button {
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    background: var(--clr-primary-10);
    font-weight: bold;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
    align-self: center;
    margin-top: 3rem;
  }
  .group-btn {
    align-self: center;
  }
`;

export default AddProduct;
