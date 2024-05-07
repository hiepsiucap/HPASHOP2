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
import customer from "../assets/customer.png";
import { formatDate } from "../utils/helpers";
export const AdminUser = () => {
  const [pagination, setpage] = useState(1);
  const [searchword, searchwordChange] = useState("");
  const loaderdata = useLoaderData();
  const users = loaderdata.data.users;
  console.log(users);
  const onChangeHandler = (e) => {
    searchwordChange(e.target.value);
  };
  console.log(searchword);
  return (
    <section className="flex flex-col gap-10 px-5">
      <div className="flex justify-between pt-12 mt-5">
        <h3 className="font-bold">Khách hàng</h3>
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
          <div>
            <Link className="text-sm font-medium text-Primarycolor2 border border-Neutral900 px-4 py-2 mx-0 rounded-md bg-Primarycolor2 text-white">
              Add Customer
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white px-5 py-5 rounded-lg relative">
        <div
          type="text"
          className="w-1/2 border-2 border-gray-200 py-4 px-3 flex space-x-2 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 stroke-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            className=" outline-none w-full"
            onChange={onChangeHandler}
          />
        </div>
        <p className="absolute top-3 left-10 bg-white text-gray-400 text-sm px-2">
          tên khách hàng
        </p>
      </div>
      <div className="flex flex-col shadow-md">
        <p className="font-bold text-lg px-5 py-6 bg-white my-0">
          Khách hàng gần đây
        </p>
        <div className="flex flex-col shadow-md ">
          <div className="flex justify-between my-0 px-5 py-5 bg-slate-100">
            <p className="font-bold w-1/5 text-sm my-0">Tên</p>
            <p className="font-bold w-1/5 text-sm my-0">Email</p>
            <p className="font-bold w-1/5 text-sm my-0">Công ty</p>
            <p className="font-bold w-1/5 text-sm my-0">Số điện thoại</p>
            <p className="font-bold w-1/5 text-sm my-0">Ngày đăng kí</p>
          </div>
          {users &&
            users.map((oneuser, index) => {
              const name = oneuser.name.toLowerCase();
              const search = searchword?.toLocaleLowerCase();
              if (searchword === "" || name.startsWith(search) === true)
                if (
                  index >= (pagination - 1) * 5 &&
                  index < (pagination - 1) * 5 + 5
                )
                  return (
                    <div className="flex justify-between my-0 px-5 py-5 bg-white items-center border-b border-neutral-200">
                      <div className="w-1/5 text-sm my-0 flex space-x-1 items-center">
                        <img
                          src={oneuser.avatar.url}
                          alt=""
                          className="w-8 h-8 block"
                        />
                        <p className="m-0">{oneuser.name}</p>
                      </div>
                      <p className="w-1/5 text-sm my-0">{oneuser.email}</p>
                      <p className="w-1/5 text-sm my-0">{oneuser.company}</p>
                      <p className="w-1/5 text-sm my-0">{oneuser?.phone}</p>
                      <p className="w-1/5 text-sm my-0">
                        {formatDate(oneuser?.createdAt)}
                      </p>
                    </div>
                  );
            })}
        </div>
        <div className="flex justify-end my-0 px-5 py-5 bg-white items-center space-x-2">
          <p className="m-0 text-sm mx-5">
            {(pagination - 1) * 5 + 1}-
            {(pagination - 1) * 5 + 5 > users.length + 1
              ? users?.length + 1
              : (pagination - 1) * 5 + 5}{" "}
            of {users.length + 1}
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
              if (pagination * 5 + 1 < users.length)
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
export const AdminLoader = async ({ request, params }) => {
  const response = await fetch("http://localhost:4000/api/v1/users", {
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
const Wrapper = styled.main``;
