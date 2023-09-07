import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function HomeLayout() {
  return (
    <div className="main_layout_container">
      <div className="layout_header">
        <Header />
      </div>

      <NavBar />
      <div className="main_layout_body">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
