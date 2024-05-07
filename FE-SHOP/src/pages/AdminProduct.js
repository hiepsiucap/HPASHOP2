/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link, useLoaderData } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { getCookie } from "react-use-cookie";
import logo from "../assets/logo.svg";
import twodot from "../assets/dots.png";
import { formatPrice } from "../utils/helpers";
import order from "../assets/shopping-bag (1).png";
import money from "../assets/money.png";
import CustomChart from "../components/Chart";
import Box from "@mui/material/Box";
import Slider from "react-slider";
import customer from "../assets/customer.png";
import { formatDate } from "../utils/helpers";
import { SortProduct } from "../utils/helpers";
import Datepicker from "react-tailwindcss-datepicker";
export const AdminProduct = () => {
  const [pagination, setpage] = useState(1);
  const [searchword, searchwordChange] = useState("");

  const [sort, sortchange] = useState("");
  const data = useLoaderData();
  const loaderdata = data.data.result;
  let [products, changeproducts] = useState(loaderdata);
  let [filterproduct, changefilterproduct] = useState(products);
  let [rangeprice, setRangePrice] = useState([
    data.data.minprice,
    data.data.maxprice,
  ]);
  useEffect(() => {
    const filter = products.filter((product, index) => {
      const name = product.name.toLowerCase();
      const search = searchword?.toLocaleLowerCase();
      if (product.price >= rangeprice[0] && product.price <= rangeprice[1]) {
        if (searchword === "" || name.startsWith(search) === true)
          return product;
      }
      return false;
    });
    changefilterproduct(filter);
  }, [sort, rangeprice, searchword]);
  console.log(filterproduct);
  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
      props.index === 2 ? "#ddd" : props.index === 1 ? "#04ABFF" : null};
    border-radius: 999px;
  `;
  const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );

  console.log(rangeprice);
  const onChangeHandler = (e) => {
    searchwordChange(e.target.value);
  };
  function valuetext(value) {
    return formatPrice(value);
  }
  const onChangeSortHandler = (e) => {
    sortchange(e.target.value);
    changeproducts((prev) => {
      return [...SortProduct({ sort: e.target.value, loaderdata: prev })];
    });
  };
  console.log(searchword);
  return (
    <section className="flex flex-col gap-10 px-5">
      <div className="flex justify-between pt-12 mt-5">
        <h3 className="font-bold">Sản Phẩm</h3>
        <div className="flex space-x-5 items-center">
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-Primarycolor2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            <p className="text-sm text-Primarycolor2 font-medium m-0">Import</p>
          </div>
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-Primarycolor2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>

            <p className="text-sm text-Primarycolor2 font-medium m-0">Export</p>
          </div>
        </div>
      </div>
      <div className="bg-white px-5 py-5 rounded-lg flex space-x-5 ">
        <div
          type="text"
          className="w-1/4 border-2 border-gray-200 py-4 px-3 flex space-x-2 rounded-xl relative"
        >
          <input
            type="text"
            className=" outline-none w-full"
            onChange={onChangeHandler}
          />
          <p className="absolute -top-2 left-3 bg-white text-gray-400 text-sm px-2">
            Tên sản phẩm
          </p>
        </div>
        <div className="flex flex-col  space-y-2 w-1/2 px-2 py-1 border-2 border-gray-200 rounded-2xl">
          <p className="text-blue text-center m-0 text-sm">
            Giá từ: {formatPrice(rangeprice[0])} to {formatPrice(rangeprice[1])}
          </p>
          <div className="flex item items-center space-x-2">
            <p className="m-0 text-sm w-1/5">
              {formatPrice(data.data.minprice)}
            </p>
            <Slider
              value={rangeprice}
              className="w-full h-2 bg-gray-200 rounded-full"
              thumbClassName="bg-white border border-gray-900 h-5 w-5 cursor-pointer rounded-full -top-1.5"
              onChange={setRangePrice}
              markClassName="bg-gray-900"
              renderTrack={Track}
              min={data.data.minprice}
              max={data.data.maxprice}
            />
            <p className="m-0 text-sm w-1/5">
              {formatPrice(data.data.maxprice)}
            </p>
          </div>
        </div>
        <select
          name="sortterm"
          id="sorterm"
          className="w-1/4 border-2 rounded-2xl px-2 py-1 text-sm"
          value={sort}
          onChange={onChangeSortHandler}
        >
          <option value="">Sắp xếp </option>
          <option value="az">Tên A-Z</option>
          <option value="za">Tên Z-A</option>
          <option value="bestseller">Bán chạy nhất</option>
          <option value="higheststock">Tồn kho nhiều nhất</option>
          <option value="highestprice">Giá cao nhất</option>
          <option value="loweststock">Tồn kho ít nhất</option>
        </select>
      </div>
      <div className="flex flex-col shadow-md">
        <p className="font-bold text-lg px-5 py-6 bg-white my-0">Đơn gần đây</p>
        <div className="flex flex-col shadow-md ">
          <div className="flex justify-between my-0 px-5 py-5 text-center bg-slate-100">
            <p className="font-bold w-1/3 text-sm my-0 ">tên sản phẩm</p>
            <p className="font-bold w-1/5 text-sm my-0">Số lượng bán ra </p>
            <p className="font-bold w-1/6 text-sm my-0">Tồn kho</p>
            <p className="font-bold w-1/5 text-sm my-0">Giá sản phẩm</p>
            <p className="font-bold w-1/5 text-sm my-0">Loại sản phẩm</p>
            <p className="font-bold w-1/5 text-sm my-0">Công ty</p>
          </div>
          {filterproduct &&
            filterproduct.map((product, index) => {
              if (
                index >= (pagination - 1) * 5 &&
                index < (pagination - 1) * 5 + 5
              )
                return (
                  <div
                    className="flex justify-between my-0 px-5 py-5 bg-white items-center text-center border-b border-neutral-200"
                    id={index}
                  >
                    <div className="w-1/3 text-sm my-0 flex space-x-1 text-left items-center">
                      <img
                        src={product?.images[0].url}
                        alt=""
                        className="h-8 w-8 rounded-full"
                      />
                      <p className="m-0">{product?.name}</p>
                    </div>
                    <p className="w-1/5 text-sm my-0 text-center">
                      {product?.item.length}
                    </p>
                    <p className="w-1/6 text-sm my-0">{product?.stock}</p>
                    <p className="w-1/5 text-sm my-0">
                      {formatPrice(product?.price)}
                    </p>
                    <p className="w-1/5 text-sm my-0">{product?.category}</p>
                    <p className="w-1/5 text-sm my-0">{product?.company}</p>
                  </div>
                );
            })}
        </div>
        <div className="flex justify-end my-0 px-5 py-5 bg-white items-center space-x-2">
          <p className="m-0 text-sm mx-5">
            {(pagination - 1) * 5 + 1}-
            {(pagination - 1) * 5 + 5 > filterproduct.length + 1
              ? filterproduct.length
              : (pagination - 1) * 5 + 5}{" "}
            of {filterproduct.length}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            onClick={() => {
              if (pagination > 1)
                setpage((prevpage) => {
                  const newpage = prevpage - 1;
                  return newpage;
                });
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            onClick={() => {
              if (pagination * 5 < products.length)
                setpage((prevpage) => {
                  const newpage = prevpage + 1;
                  return newpage;
                });
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
export const ProductLoader = async ({ request, params }) => {
  const response = await fetch("http://localhost:4000/api/v1/products", {
    method: "GET",
    withCredntials: true,
    credentials: "include",
    headers: {
      Accept: "application/form-data",
      "Content-Type": "application/json",
    },
  });
  if (response.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  const data = await response.json();
  return { data };
};
const Wrapper = styled.main`
  .slider {
    width: 100%;
    height: 10px;
    background-color: #cdd9ed;
  }
  input {
    border: 1px solid black;
  }
`;
