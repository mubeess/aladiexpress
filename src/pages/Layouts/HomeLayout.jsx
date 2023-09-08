import React, { useState } from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function HomeLayout() {
  const [viewMenu, setViewMenu] = useState(false);
  const toggleMenu = () => {
    setViewMenu((prev) => !prev);
  };
  return (
    <div className="main_layout_container">
      <div className="layout_header">
        <Header toggleMenu={toggleMenu} isToggled={viewMenu} />
      </div>

      <NavBar viewMenu={viewMenu} />
      <div className="main_layout_body">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
