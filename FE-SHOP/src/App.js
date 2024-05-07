/** @format */

import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { ToastContainer, toast } from "react-toastify";
import { AdminLoader } from "./pages/AdminUser";
import { OrderLoader } from "./pages/AdminOrder";
import { ProductLoader } from "./pages/AdminProduct";
import "react-toastify/dist/ReactToastify.css";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  Private,
  AdminProduct,
  AdminOrder,
  AddProduct,
  ConstructionPage,
  RootLayout,
  Login,
  Register,
  Profile,
  ResetPassWord,
  ProtectRoute,
  PaymentSuccess,
  VerifyEmail,
  ChangePassword,
  DashBoard,
  AdminLayout,
  AdminUser,
} from "./pages";
import { Verifyloader } from "./pages/VerifyPage";
import { LoginAction } from "./pages/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          element: <ProtectRoute type="nologin"></ProtectRoute>,
          children: [
            {
              path: "/login",
              element: <Login></Login>,
            },
            {
              path: "/reset-password",
              element: <ResetPassWord></ResetPassWord>,
            },
            {
              path: "/change-password",
              element: <ChangePassword></ChangePassword>,
            },
            {
              path: "/verifyemail",
              element: <VerifyEmail></VerifyEmail>,
              loader: Verifyloader,
            },
            {
              path: "/register",
              element: <Register></Register>,
            },
          ],
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/paymentsuccess",
          element: <PaymentSuccess></PaymentSuccess>,
        },
        {
          path: "/checkout",
          element: <Checkout></Checkout>,
        },
        {
          element: <ProtectRoute type="login"></ProtectRoute>,
          children: [
            {
              path: "/profile",
              element: <Profile></Profile>,
            },
            {
              path: "/cart",
              element: <Cart></Cart>,
            },
          ],
        },
        {
          path: "/construction",
          element: <ConstructionPage></ConstructionPage>,
        },
        {
          path: "/products",
          children: [
            { path: "", element: <Products></Products> },
            { path: ":id", element: <SingleProduct></SingleProduct> },
          ],
        },
        {
          element: <ProtectRoute type="CheckPermission"></ProtectRoute>,
          children: [
            {
              path: "/addproduct",
              element: <AddProduct></AddProduct>,
            },
          ],
        },
      ],
      errorElement: <Error></Error>,
    },
    {
      path: "/admin",
      element: <AdminLayout></AdminLayout>,
      children: [
        {
          path: "",
          element: <DashBoard></DashBoard>,
        },
        {
          path: "dashboard",
          element: <DashBoard></DashBoard>,
        },
        {
          path: "orders",
          element: <AdminOrder></AdminOrder>,
          loader: OrderLoader,
        },
        {
          path: "customers",
          element: <AdminUser></AdminUser>,
          loader: AdminLoader,
        },
        {
          path: "products",
          element: <AdminProduct></AdminProduct>,
          loader: ProductLoader,
        },
        {
          path: "profit",
          element: <DashBoard></DashBoard>,
        },
      ],
      errorElement: <Error></Error>,
    },
  ]);
  return (
    <div>
      <ToastContainer position="top-left" />
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
