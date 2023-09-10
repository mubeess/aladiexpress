import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeLayout from "../pages/Layouts/HomeLayout";
import Product from "../pages/Product";

export default function IndexRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  );
}
