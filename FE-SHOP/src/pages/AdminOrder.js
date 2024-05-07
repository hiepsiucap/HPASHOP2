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
import { SortFunction } from "../utils/helpers";
import Datepicker from "react-tailwindcss-datepicker";
export const AdminOrder = () => {
  const [pagination, setpage] = useState(1);
  const [searchword, searchwordChange] = useState("");
  const [sort, sortchange] = useState("");
  const data = useLoaderData();
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const loaderdata = data.data.orders;
  let [orders, changeorder] = useState(loaderdata);
  let [filterorder, changefilterorder] = useState(orders);
  useEffect(() => {
    const filter = orders.filter((order, index) => {
      const name = order.customername.toLowerCase();
      const search = searchword?.toLocaleLowerCase();
      let orderdate = new Date(order.createdAt);
      let start = orderdate;
      let end = orderdate;
      if (value.startDate) start = new Date(value.startDate);
      if (value.endDate) end = new Date(value.endDate);
      console.log(start, end);
      if (start <= orderdate && orderdate <= end)
        if (searchword === "" || name.startsWith(search) === true) return order;
      return false;
    });
    changefilterorder(filter);
  }, [sort, searchword, value, orders]);
  console.log(orders);
  const onChangeHandler = (e) => {
    searchwordChange(e.target.value);
  };
  const onChangeSortHandler = (e) => {
    sortchange(e.target.value);
    changeorder((prev) => {
      return [...SortFunction({ sort: e.target.value, loaderdata: prev })];
    });
  };
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  console.log(searchword);
  return (
    <section className="flex flex-col gap-10 px-5 pb-10">
      <div className="flex justify-between pt-12 mt-5">
        <h3 className="font-bold">Đơn hàng</h3>
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
            Search customer
          </p>
        </div>
        <div className="flex items-center w-1/2 px-2 py-1 border-2 border-gray-200 rounded-2xl">
          <p className="mb-0 text-sm shrink-0">Từ Ngày/ Đến Ngày:</p>
          <Datepicker
            primaryColor={"blue"}
            value={value}
            // inputClassName="custominput"
            onChange={handleValueChange}
          />
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
          <option value="mostprice">Trị giá cao nhất</option>
          <option value="lowestprice">Trị giá thấp nhất</option>
          <option value="recentday">Ngày xuất gần nhất</option>
          <option value="longday">Ngày xuất xa nhất</option>
        </select>
      </div>
      <div className="flex flex-col shadow-md">
        <p className="font-bold text-lg px-5 py-6 bg-white my-0">Đơn gần đây</p>
        <div className="flex flex-col shadow-md ">
          <div className="flex justify-between my-0 px-5 py-5 bg-slate-100">
            <p className="font-bold w-1/5 text-sm my-0">tên khách</p>
            <p className="font-bold w-1/5 text-sm my-0">Số điện thoại</p>
            <p className="font-bold w-1/6 text-sm my-0">số lượng</p>
            <p className="font-bold w-1/5 text-sm my-0">tổng giá trị</p>
            <p className="font-bold w-1/5 text-sm my-0">Ngày xuất</p>
            <p className="font-bold w-1/5 text-sm my-0">Trạng thái</p>
          </div>
          {filterorder &&
            filterorder.map((order, index) => {
              if (
                index >= (pagination - 1) * 5 &&
                index < (pagination - 1) * 5 + 5
              )
                return (
                  <div className="flex justify-between my-0 px-5 py-5 bg-white items-center border-b border-neutral-200">
                    <div className="w-1/5 text-sm my-0 flex space-x-1 items-center">
                      <p className="m-0">{order.customername}</p>
                    </div>
                    <p className="w-1/5 text-sm my-0">{order.phonenumber}</p>
                    <p className="w-1/6 text-sm my-0">
                      {order.orderItems.length}
                    </p>
                    <p className="w-1/5 text-sm my-0">
                      {formatPrice(order?.total)}
                    </p>
                    <p className="w-1/5 text-sm my-0">
                      {formatDate(order?.createdAt)}
                    </p>
                    <select
                      className="w-1/5 text-sm my-0"
                      id={order._id}
                      value={order.status}
                      onChange={async (e) => {
                        const FetchApi = async () => {
                          const response = await fetch(
                            `http://localhost:4000/api/v1/orders/${e.target.id}`,
                            {
                              method: "PATCH",
                              withCredntials: true,
                              credentials: "include",
                              headers: {
                                Accept: "application/form-data",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                status: e.target.value,
                              }),
                            }
                          );
                          if (response.status === 404) {
                            throw new Response("Not Found", {
                              status: 404,
                            });
                          }
                          const data = await response.json();
                          const finaldata = data.orders;
                          changeorder([
                            ...SortFunction({
                              sort,
                              loaderdata: finaldata,
                            }),
                          ]);
                        };
                        await FetchApi();
                      }}
                    >
                      <option value="pending">Chờ xác nhận</option>
                      <option value="delivered">Đang vận chuyển</option>
                      <option value="success">Giao thành công</option>
                    </select>
                  </div>
                );
            })}
        </div>
        <div className="flex justify-end my-0 px-5 py-5 bg-white items-center space-x-2">
          <p className="m-0 text-sm mx-5">
            {(pagination - 1) * 5 + 1}-
            {(pagination - 1) * 5 + 5 > filterorder.length
              ? filterorder.length
              : (pagination - 1) * 5 + 5}{" "}
            of {filterorder.length}
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
              if (pagination * 5 < filterorder.length)
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
export const OrderLoader = async ({ request, params }) => {
  const response = await fetch("http://localhost:4000/api/v1/orders", {
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
  input {
    border: 1px solid black;
  }
`;
