/** @format */

import { Sidebar, Footer, Navbar } from "../components";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Adminlinks } from "../utils/constants";
const AdminLayout = (props) => {
  return (
    <>
      <section class="flex h-full">
        <nav class="w-1/6 flex flex-col flex-start space-y-5 py-10  font-sanss font-bold  text-sm bg-Neutral900 text-neutral-300 min-h-lvh text-center">
          {Adminlinks.map((link) => {
            let bg = null;
            if (link.name === props.name) {
              bg = "bg-SelectedColor";
            }
            return (
              <div class={`flex gap-3 ${bg} px-5 py-2`}>
                {link.svg}
                <Link to={link.url} class="">
                  {link.text}
                </Link>
              </div>
            );
          })}
        </nav>
        <div class="container bg-gray-100">
          <div className="flex w-full justify-between px-5 shadow-md">
            <img src={logo} alt="" className="w-24 h-16" />
            <div class="flex justify-end items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
              <img
                src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1704953360/UserAvatar/krsg4wfn2rmedetijeji.jpg"
                alt=""
                className="w-9 h-9 rounded-full"
              />
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </section>
    </>
  );
};
export default AdminLayout;
