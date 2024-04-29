import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import MainLayout from "./components/layout/MainLayout";

import Dashbord from "./pages/Dashbord";


import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ProductPostPage from "./pages/product";
import CategoryPostPage from "./pages/category";
import UserPostPage from "./pages/user";
import BlogPostPage from "./pages/blog";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route
            path="/"
            element={
              // <PublicRoute>
              <Login />
              // </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              // <PublicRoute>
              <ForgotPassword />
              // </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              // <PublicRoute>
              <Register />
              // </PublicRoute>
            }
          />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashbord />} />
            <Route path="product" element={<ProductPostPage />} />
            <Route path="category" element={<CategoryPostPage />} />

            <Route path="user" element={<UserPostPage />} />
            <Route path="blog" element={<BlogPostPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
