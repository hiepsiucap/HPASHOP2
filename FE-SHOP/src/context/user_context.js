/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const storedState = JSON.parse(sessionStorage.getItem("userstate")) || {
    login: false,
    users: {},
  };
  const [user, ChangeUser] = useState(storedState);
  useEffect(() => {
    sessionStorage.setItem("userstate", JSON.stringify(user));
  }, [user]);

  const logOut = () => {
    ChangeUser({
      login: false,
      users: {},
    });
  };

  useEffect(() => {
    const fetchapicheck = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/orders/showAllMyOrders",
          {
            method: "GET",
            withCredntials: true,
            credentials: "include",
            headers: {
              Accept: "application/form-data",
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.status);
        if (response.status === 401) {
          logOut();
        }
      } catch {
        console.log("Sucess Full");
      }
    };
    fetchapicheck();
  }, []);
  const saveUser = (users) => {
    const data = {
      login: true,
      users,
    };
    console.log(data);
    ChangeUser(data);
  };

  return (
    <UserContext.Provider value={{ ...user, saveUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
