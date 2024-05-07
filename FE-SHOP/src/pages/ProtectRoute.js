/** @format */
import Nav from "../components/Navbar";
import { useUserContext } from "../context/user_context";
import { redirect, Navigate, Outlet, useLocation } from "react-router-dom";
const ProtectRoute = ({ type }) => {
  const { login, users } = useUserContext();
  const location = useLocation();
  if (type === "CheckPermission") {
    if (users.role !== "admin")
      return (
        <Navigate to="/profile" replace state={{ from: location }}></Navigate>
      );
  } else if (type === "login") {
    if (!login) {
      return (
        <Navigate to="/login" replace state={{ from: location }}></Navigate>
      );
    }
  } else if (type === "nologin") {
    if (login) {
      return (
        <Navigate to="/profile" replace state={{ from: location }}></Navigate>
      );
    }
  }
  return <Outlet></Outlet>;
};
export default ProtectRoute;
