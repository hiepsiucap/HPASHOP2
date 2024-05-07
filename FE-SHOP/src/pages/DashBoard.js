/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
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
const DashBoard = () => {
  const initalData = {};
  const [data, ChangeData] = useState(initalData);
  const [chatyear, ChangeYear] = useState(2024);
  const FetchData = async () => {
    const response = await fetch("http://localhost:4000/api/v1/dashboard", {
      method: "GET",
      withCredntials: true,
      credentials: "include",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
    });
    if (response) {
      const resultdata = await response.json();
      const MonthRevune = Array(12).fill(0);
      resultdata?.total.map((revenuemonth) => {
        if (revenuemonth._id.year === 2024)
          MonthRevune[revenuemonth._id.month - 1] =
            Math.round((revenuemonth.TotalRevenue / 1000000) * 10) / 10;
        return 0;
      });
      ChangeData({ ...resultdata, MonthRevune });
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  console.log(data);
  return (
    <main>
      <div class="flex px-10 py-5 space-x-5">
        <div class="w-1/3 h-40 rounded-md shadow-md bg-gray-200 flex justify-center items-center">
          <div class="w-1/3">
            <img src={money} alt="" class="w-12 h-12" />
          </div>
          <div class="w-1/2 flex flex-col">
            <h1 class="text-lg ">lợi nhuận:</h1>
            <h2 class="text-xl font-bold">{formatPrice(data.AllRevenue)}</h2>
            {data.percentrevenue > 0 ? (
              <p class="text-green-600 text-lg">+{data.percentrevenue}%</p>
            ) : (
              <p class="text-red-600 text-lg">{data.percentrevenue}%</p>
            )}
          </div>
        </div>
        <div class="w-1/3 h-40 gap-3 rounded-md shadow-md bg-gray-200 flex justify-center items-center">
          <div class="w-1/3">
            <img src={customer} alt="" class="w-12 h-12" />
          </div>
          <div class="w-1/2 flex flex-col ">
            <h1 class="text-lg">khách hàng:</h1>
            <h2 class="text-xl font-bold">{data.totaluser} khách</h2>
            {data.percentcustomer > 0 ? (
              <p class="text-green-600 text-lg">+{data.percentcustomer}%</p>
            ) : (
              <p class="text-red-600 text-lg">{data.percentcustomer}%</p>
            )}
          </div>
        </div>
        <div class="w-1/3  rounded-md shadow-md bg-gray-200 flex justify-center items-center">
          <div class="w-1/3">
            <img src={order} alt="" class="w-12 h-12" />
          </div>
          <div class="w-1/2 flex flex-col">
            <h1 class="text-lg">đơn hàng:</h1>
            <h2 class="text-xl font-bold">{data.totalorder} đơn</h2>
            <p class="text-green-600 text-lg">+ {data.percentorder}%</p>
          </div>
        </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
        <h3 class="text-lg font-bold text-center p-5">TOP 5 BÁN CHẠY NHẤT</h3>
        <table class="w-full text-sm text-left rtl:text-right text-black-500 shadow-md">
          <thead class="text-xs text-gray-700 uppercase bg-gray-400 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Tên Sản Phẩm
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                  Số lượng bán được
                  <a href="#">
                    <svg
                      class="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                  Danh mục
                  <a href="#">
                    <svg
                      class="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                  Giá
                  <a href="#">
                    <svg
                      class="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.product
              ? data.product.map((oneproduct, index) => {
                  let bg = "bg-gray-200";
                  if (index % 2 === 0) bg = "bg-gray-100";
                  return (
                    <tr class={bg}>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-black-500 whitespace-nowrap"
                      >
                        {oneproduct.details[0].name}
                      </th>
                      <td class="px-6 py-4">{oneproduct.Numsell}</td>
                      <td class="px-6 py-4">
                        {oneproduct.details[0].category}
                      </td>
                      <td class="px-6 py-4">
                        {formatPrice(oneproduct.details[0].price)}
                      </td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Xem
                        </a>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className="mx-auto flex items-center flex-col mt-10">
        <h1 className="text-lg font-bold">Doanh thu theo tháng</h1>
        <select
          name="year"
          id="cars"
          className="self-end mr-36 px-5"
          onChange={(e) => {
            e.preventDefault();
            const MonthRevune = Array(12).fill(0);
            data.total.map((revenuemonth) => {
              if (revenuemonth._id.year == e.target.value)
                MonthRevune[revenuemonth._id.month - 1] =
                  Math.round((revenuemonth.TotalRevenue / 1000000) * 10) / 10;
              return 0;
            });
            ChangeData((prev) => {
              return { ...prev, MonthRevune };
            });
          }}
        >
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
        </select>
        <CustomChart
          data={data.MonthRevune || [2, 0, 0, 0, 0, 0]}
        ></CustomChart>
      </div>
      <div className="flex mt-10 px-10 space-x-10">
        <div className="flex flex-col bg-white w-1/3 justify-between rounded-sm">
          <h6 className="px-5 pt-10 border-b-2 border-gray-200 pb-5 font-bold font-sanss">
            Sản phẩm tồn kho
          </h6>
          {data.topproduct &&
            data.topproduct.map((product) => {
              return (
                <div className="p-2.5 flex border-b-2 border-gray-200 w-full justify-between">
                  <div className="flex justify-center items-center">
                    <img
                      src={product.images[0].url}
                      alt=""
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="p-3 flex flex-col justify-center w-1/2">
                    <p className="text-md font m-0">{product.name}</p>
                    <p className="text-sm m-0">Số lượng:{product.stock}</p>
                  </div>
                  <div className="flex justify-end items-center w-1/6 justify-self-end">
                    <img src={twodot} className="h-6 w-6" alt="" />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col">
          <h5 className="text-center">Đơn hàng mới nhất</h5>
          <table class="w-full text-sm text-left rtl:text-right text-black-500 shadow-md">
            <thead class="text-xs text-gray-700 uppercase bg-gray-400 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Mã đơn hàng
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Số lượng
                    <a href="#">
                      <svg
                        class="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Tên KH
                    <a href="#">
                      <svg
                        class="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Giá trị
                    <a href="#">
                      <svg
                        class="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex w-24 items-center justify-start">
                    Ngày xuất
                    <a href="#">
                      <svg
                        class="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.toporder &&
                data.toporder.map((order, index) => {
                  let bg = "bg-gray-200";
                  if (index % 2 === 0) bg = "bg-gray-100";
                  return (
                    <tr class={bg}>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-black-500 whitespace-nowrap"
                      >
                        {order._id}
                      </th>

                      <td class="px-6 py-4">{order.orderItems.length}</td>
                      <td class="px-6 py-4">{order.customername}</td>
                      <td class="px-6 py-4">{formatPrice(order.total)}</td>
                      <td class="px-6 py-4">{formatDate(order.createdAt)}</td>
                      <td class="px-6 py-4 text-right"></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default DashBoard;
