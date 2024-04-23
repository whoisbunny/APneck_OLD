import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
