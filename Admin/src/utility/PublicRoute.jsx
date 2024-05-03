import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("isAuth")) {
    return <Navigate to={"/admin"} />;
  } else {
    return children;
  }
};

export default PublicRoute;
