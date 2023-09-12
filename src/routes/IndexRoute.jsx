import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeLayout from "../pages/Layouts/HomeLayout";
import Product from "../pages/Product";
import ProductDetails from "../pages/PriductDetails";

export default function IndexRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}
