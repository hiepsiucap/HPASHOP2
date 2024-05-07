/** @format */

import { Sidebar, Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};
export default RootLayout;
