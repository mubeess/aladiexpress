import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="main_layout_container">
      <div
        style={{
          padding: 20,
          paddingLeft: 100,
          paddingRight: 100,
        }}
      >
        <Header />
      </div>

      <NavBar />
      <div className="main_layout_body">
        <Outlet />
      </div>
    </div>
  );
}
