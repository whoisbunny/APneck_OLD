import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (localStorage.getItem("isAuth")) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoute;
