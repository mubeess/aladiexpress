import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeLayout from "../pages/Layouts/HomeLayout";
import Product from "../pages/Product";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/PriductDetails";
import Checkout from "../pages/Checkout/Checkout";

export default function IndexRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
