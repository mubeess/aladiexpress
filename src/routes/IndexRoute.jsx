import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeLayout from "../pages/Layouts/HomeLayout";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout/Checkout";
import Register from "../pages/Register/index";
import Login from "../pages/Login";
import Index from "../pages/Index/Index";
import Product from "../pages/Product/index";
export default function IndexRoute() {
  return (
    <Routes>
      <Route index path="/" element={<Index />} />
      <Route path="/store" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="details" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
